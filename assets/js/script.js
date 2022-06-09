import {playlist} from "./lib/playlist.js";
import {sliderEffect} from "./lib/slider.js";
import {play, pause, audioManager, volManager} from "./lib/audioManager.js";
import {timeManager} from "./lib/timeManager.js"
import {infos} from "./lib/infosManager.js";

let currentTrack = 0;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");
const volUp = document.querySelector(".volUp");
const volDown = document.querySelector(".volDown");
const volMute = document.querySelector(".volMute");
const time = document.querySelector(".time");
const title = document.querySelector(".title");
const moreInfos = document.querySelector(".moreInfos");
const slider = document.querySelector(".slider");
const hammerSwipe = new Hammer(slider);
globalThis.hammerSwipe = hammerSwipe;
globalThis.slider = slider;
globalThis.moreInfos = moreInfos;
globalThis.title = title;
globalThis.time = time;
globalThis.volUp = volUp;
globalThis.volDown = volDown;
globalThis.volMute = volMute;
globalThis.playlist = playlist;
globalThis.currentTrack = currentTrack;
globalThis.next = next;
globalThis.prev = prev;
globalThis.playPause = playPause;

let audio = new Audio(playlist[currentTrack].mp3);
globalThis.audio = audio;

sliderEffect();
audioManager();
volManager();
timeManager();
infos();