package dev.brian.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// Data access layer for the API, actually talking to the DB and getting the data
//By extending the Repository, the MongoDB classes are automatically created
@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
//    This will be automatically created by the mongodb plugin, it will understand we need to find 1 movie by imdbId
    Optional<Movie> findMovieByImdbId(String imdbId);
}
