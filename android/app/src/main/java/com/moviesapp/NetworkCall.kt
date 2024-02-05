package com.moviesapp

import com.facebook.react.bridge.*
import org.json.JSONObject
import org.json.JSONArray
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL
import com.google.gson.Gson

data class Movie(
    val id: Int? = null,
    val title: String? = null,
    val overview: String? = null,
    val adult: Boolean? = null,
    val backdropPath: String? = null,
    val genreIds: List<Int>? = null,
    val originalLanguage: String? = null,
    val originalTitle: String? = null,
    val popularity: Double? = null,
    val posterPath: String? = null,
    val releaseDate: String? = null,
    val video: Boolean? = null,
    val voteAverage: Double? = null,
    val voteCount: Int? = null
)

class NetworkCall(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "NetworkCall"
    }

    @ReactMethod
    fun fetchMovies(apiKey: String, promise: Promise) {
        
      try {
            val url = URL("http://api.themoviedb.org/3/discover/movie?api_key=$apiKey")
            val connection = url.openConnection() as HttpURLConnection
            connection.requestMethod = "GET"

            val reader = BufferedReader(InputStreamReader(connection.inputStream))
            val response = StringBuilder()
            var line: String?
            while (reader.readLine().also { line = it } != null) {
                response.append(line)
            }
            reader.close()

            val jsonResponse = JSONObject(response.toString())
            val resultsArray = jsonResponse.getJSONArray("results")

            // Convert Movie objects to JSON strings
            val moviesJsonArray = JSONArray()
            for (i in 0 until resultsArray.length()) {
                val movieObject = resultsArray.getJSONObject(i)
                // Construct Movie object
                val genreIdsArray = movieObject.optJSONArray("genre_ids")
              val genreIds = if (genreIdsArray != null) {
             (0 until genreIdsArray.length()).map { genreIdsArray.getInt(it) }
                } else {
                    emptyList()
                }
                val movie = Movie(

                    id = movieObject.optInt("id", -1), // Provide default value if id is missing
                    title = movieObject.optString("title", ""), // Provide default value if title is missing
                    overview = movieObject.optString("overview", ""), // Provide default value if overview is missing
                    adult = movieObject.optBoolean("adult", false), // Provide default value if adult is missing
                    backdropPath = movieObject.optString("backdrop_path", null),
                    genreIds =  genreIds,
                    originalLanguage = movieObject.optString("original_language", ""), // Provide default value if originalLanguage is missing
                    originalTitle = movieObject.optString("original_title", ""), // Provide default value if originalTitle is missing
                    popularity = movieObject.optDouble("popularity", 0.0), // Provide default value if popularity is missing
                    posterPath = movieObject.optString("poster_path", null),
                    releaseDate = movieObject.optString("release_date", ""), // Provide default value if releaseDate is missing
                    video = movieObject.optBoolean("video", false), // Provide default value if video is missing
                    voteAverage = movieObject.optDouble("vote_average", 0.0), // Provide default value if voteAverage is missing
                    voteCount = movieObject.optInt("vote_count", 0) // Provide default value if voteCount is missing
                  //  (0 until movieObject.getJSONArray("genre_ids").length()).map { movieObject.getJSONArray("genre_ids").getInt(it) }
                  
                    // Add other properties here...
                )
                // Serialize Movie object to JSON string
               val movieJsonString = Gson().toJson(movie)
                val movieJsonObject = JSONObject(movieJsonString)
                moviesJsonArray.put(movieJsonObject)
            }

            // Resolve promise with JSON array of movie objects
            promise.resolve(moviesJsonArray.toString())
        } catch (e: Exception) {
            promise.reject("Error With Fetch Movies", e.message)
        }
        
    }
}