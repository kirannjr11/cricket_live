package com.example.cricketInformer.repositories;

import com.example.cricketInformer.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepository extends JpaRepository <Match, Integer> {
    Optional<Match> findByTeamHeading(String teamHeading);
}
