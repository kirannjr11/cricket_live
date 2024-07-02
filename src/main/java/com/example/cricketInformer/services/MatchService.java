package com.example.cricketInformer.services;

import com.example.cricketInformer.entities.Match;

import java.util.List;

public interface MatchService {
    List<Match> getLiveMatchScores();
    List<List<String>> getPointTables();

    List<Match> getAllMatch();
}
