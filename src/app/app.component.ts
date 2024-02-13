import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { Howl, Howler } from 'howler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  sound!: Howl;

  constructor() {}

  ngOnInit() {
    this.sound = new Howl({
      src: ['./assets/Can.mp3'] // Replace with your actual audio files
    });

    // Play the sound
    this.sound.play();

    // Change global volume (optional)
    Howler.volume(0.5);
  }
  
}
