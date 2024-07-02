package com.example.cricketInformer.controllers;

import com.example.cricketInformer.entities.Match;
import com.example.cricketInformer.services.MatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/match")
public class MatchController {
    private final MatchService matchService;

    @GetMapping("/live")
    public ResponseEntity<List<Match>> getLiveMatches() {
        return new ResponseEntity<>(this.matchService.getLiveMatchScores(), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Match>> getAllMatches() {
        return new ResponseEntity<>(this.matchService.getAllMatch(), HttpStatus.OK);
    }

    @GetMapping("/point")
    public ResponseEntity<?> getPointTable() {
        return new ResponseEntity<>(this.matchService.getPointTables(), HttpStatus.OK);
    }

}
