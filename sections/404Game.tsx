import { useSection } from "deco/hooks/useSection.ts";
import base64Images, { backgroundSvg } from "./imagesAndCss.tsx";
import { dinoGameStyles } from "./imagesAndCss.tsx";
// import { TRexGameLogic } from "./dino.ts";
import { useScript } from "deco/hooks/useScript.ts";

import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

const imagesID = {
  x1obstaclelarge: "1x-obstacle-large",
  x1obstaclesmall: "1x-obstacle-small",
  x1cloud: "1x-cloud",
  x1text: "1x-text",
  x1horizon: "1x-horizon",
  x1trex: "1x-trex",
  x1restart: "1x-restart",
  x2obstaclelarge: "2x-obstacle-large",
  x2obstaclesmall: "2x-obstacle-small",
  x2cloud: "2x-cloud",
  x2text: "2x-text",
  x2horizon: "2x-horizon",
  x2trex: "2x-trex",
  x2restart: "2x-restart",
  offlinesoundpress: "offline-sound-press",
  offlinesoundhit: "offline-sound-hit",
  offlinesoundreached: "offline-sound-reached",
};

interface Sprite {
  base64Sprite?: string;
  // image?: ImageWidget;
  alt?: string;
  // width?: number;
  // height?: number;
}

const dimension2x = {
  x2: {
    obstacleLarge: { width: 300, height: 100, id: imagesID.x2obstaclelarge },
    obstacleSmall: {
      width: 204,
      height: 70,
      id: imagesID.x2obstaclesmall,
    },
    gameText: {
      width: 382,
      height: 48,
      id: imagesID.x2text,
    },
    cloud: {
      width: 92,
      height: 28,
      id: imagesID.x2cloud,
    },
    horizon: {
      width: 2400,
      height: 24,
      id: imagesID.x2horizon,
    },
    characterSprite: {
      width: 528,
      height: 94,
      id: imagesID.x2trex,
    },
    restart: {
      width: 72,
      height: 64,
      id: imagesID.x2restart,
    },
  },
};

const dimension1x = { x1: {} };
Object.keys(dimension2x.x2).forEach((key) => {
  const { width, height, id } = dimension2x.x2[key];
  dimension1x.x1[key] = {
    width: width / 2,
    height: height / 2,
    id: id?.replace("2x", "1x"),
  };
});

console.log(dimension1x, dimension2x);

interface Assets {
  /**
   * @format text
   * @description The obstacleLarge is the trees/cactus that you see in the game. Obstacle sprite should be of dimension 150X50px (W x H) for 1x and 300x100px for 2x. You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  obstacleLarge?: Sprite;
  /**
   * @format text
   * @description The obstacleSmall includes smaller obstacles in the game. Sprite should be of dimension 102x35px (W x H) for 1x and 204x70px for 2x. You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  obstacleSmall?: Sprite;
  /**
   * @format text
   * @description The cloud sprite appears in the background. It should be of dimension 46x14px (W x H) for 1x and 92x28px for 2x. You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  cloud?: Sprite;
  /**
   * @format text
   * @description The gameText includes text elements like scores. Sprite should be of dimension 191x24px (W x H) for 1x and 382x48px for 2x. You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  gameText?: Sprite;
  /**
   * @format text
   * @description The horizon is the ground line sprite. It should be of dimension 1200x12px (W x H) for 1x and 2400x24px for 2x. You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  horizon?: Sprite;
  /**
   * @format text
   * @description The characterSprite is the main character of the game. Sprite should be of dimension 264x47px (W x H) for 1x and 528x94px for 2x. You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  characterSprite?: Sprite;
  /**
   * @format text
   * @description The restart button sprite. It should be of dimension 36x32px (W x H) for 1x and 72x64px for 2x. You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  restart?: Sprite;
  /**
   * @format text
   * @description The 2x version of obstacleLarge sprite for high-resolution displays. Dimension is 300x100px (W x H). You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  obstacleLarge2x?: Sprite;
  /**
   * @format text
   * @description The 2x version of obstacleSmall sprite for high-resolution displays. Dimension is 204x70px (W x H). You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  obstacleSmall2x?: Sprite;
  /**
   * @format text
   * @description The 2x version of cloud sprite for high-resolution displays. Dimension is 92x28px (W x H). You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  cloud2x?: Sprite;
  /**
   * @format text
   * @description The 2x version of gameText sprite for high-resolution displays. Dimension is 382x48px (W x H). You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  gameText2x?: Sprite;
  /**
   * @format text
   * @description The 2x version of horizon sprite for high-resolution displays. Dimension is 2400x24px (W x H). You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  horizon2x?: Sprite;
  /**
   * @format text
   * @description The 2x version of characterSprite for high-resolution displays. Dimension is 528x94px (W x H). You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  characterSprite2x?: Sprite;
  /**
   * @format text
   * @description The 2x version of restart button sprite for high-resolution displays. Dimension is 72x64px (W x H). You can create base64 string by using this tool - https://base64.guru/converter/encode/image/png
   */
  restart2x?: Sprite;
}

export interface Game {
  /**
   * @format number
   * @description Acceleration rate of the game character. Default value is 0.001
   * @default 0.001
   */
  acceleration?: number;

  /**
   * @format number
   * @description Speed at which the background clouds move. Default value is 0.2
   * @default 0.2
   */
  bgCloudSpeed?: number;

  /**
   * @format number
   * @description Padding from the bottom of the game screen. Default value is 10
   * @default 10
   */
  bottomPad?: number;

  /**
   * @format number
   * @description Time in milliseconds before the game clears the screen. Default value is 3000
   * @default 3000
   */
  clearTime?: number;

  /**
   * @format number
   * @description Frequency at which clouds appear in the game. Default value is 0.5
   * @default 0.5
   */
  cloudFrequency?: number;

  /**
   * @format number
   * @description Time in milliseconds before the game over screen is cleared. Default value is 750
   * @default 750
   */
  gameoverClearTime?: number;

  /**
   * @format number
   * @description Coefficient for calculating gaps between obstacles. Default value is 0.6
   * @default 0.6
   */
  gapCoefficient?: number;

  /**
   * @format number
   * @description Gravity affecting the game character's jump. Default value is 0.6
   * @default 0.6
   */
  gravity?: number;

  /**
   * @format number
   * @description Initial velocity of the game character's jump. Default value is 12
   * @default 12
   */
  initialJumpVelocity?: number;

  /**
   * @format number
   * @description Maximum number of clouds that can appear on the screen. Default value is 6
   * @default 6
   */
  maxClouds?: number;

  /**
   * @format number
   * @description Maximum length of obstacles. Default value is 3
   * @default 3
   */
  maxObstacleLength?: number;

  /**
   * @format number
   * @description Maximum speed of the game character. Default value is 12
   * @default 12
   */
  maxSpeed?: number;

  /**
   * @format number
   * @description Minimum height of the game character's jump. Default value is 35
   * @default 35
   */
  minJumpHeight?: number;

  /**
   * @format number
   * @description Coefficient for speed adjustment on mobile devices. Default value is 1.2
   * @default 1.2
   */
  mobileSpeedCoefficient?: number;

  /**
   * @format string
   * @description ID of the template for audio resources. Default value is "audio-resources"
   * @default "audio-resources"
   */
  resourceTemplateId?: string;

  /**
   * @format number
   * @description Speed of the game character. Default value is 6
   * @default 6
   */
  speed?: number;

  /**
   * @format number
   * @description Coefficient for speed reduction when dropping. Default value is 3
   * @default 3
   */
  speedDropCoefficient?: number;
}

export interface Props {
  /**
   * @format rich-text
   * @description The description of heading.
   * @default Yay! You found the Capy 🦫!
   */
  heading?: string;
  /**
   * @format rich-text
   * @description The description of subText.
   * @default subtext!
   */
  subText?: string;

  /**
   * @format rich-text
   * @description The description of instructions.
   * @default instructions!
   */
  instructions?: string;
  gameProperties?: Game;
  customizeAssets?: Assets;
  motivationBehindTheProject?: string;
  // acceleration?: number;
  // bgCloudSpeed?: number;
  // bottomPad?: number;
  // clearTime?: number;
  // cloudFrequency?: number;
  // gameoverClearTime?: number;
  // gapCoefficient?: number;
  // gravity?: number;
  // initialJumpVelocity?: number;
  // maxClouds?: number;
  // maxObstacleLength?: number;
  // maxSpeed?: number;
  // minJumpHeight?: number;
  // mobileSpeedCoefficient?: number;
  // resourceTemplateId?: string;
  // speed?: number;
  // speedDropCoefficient?: number;
}

export default function Section({
  heading = "Yay! You found the Capy 🦫",
  subText = "",
  instructions = "Press 'Space' to jump your Capy and start the game.",
  gameProperties,
  customizeAssets,
  motivationBehindTheProject = `
  <p>Motivation behind - Find my Capy | 404 page game</p>
            <br />
            <p>
              I wanted to explore the below things deco.cx
              <li>
                A fun and interactive game (Yes making a working game in deco is
                hard :(
              </li>
              <li>
                Make something innovative (in Open category) rather than a simple
                boring static regular submission
              </li>
              <li>
                Test if game assets and properties to be fully customizable (in deco admin)
              </li>
            </p>
            <br />
            <p>
              Submitting this under the open category. I wanted to see whether I
              can push the limits of deco's capabilities and create interactive
              game website that can capture the keyboard events, mouse events, load game
              assets and not just create a static site.
            </p>
            <br />
            <p>Hope you like my Capy :)</p>`,
}: Props) {
  /**
   * useSection is a nice hook for getting the HTMX link to render this section,
   * but with the following Props
   */
  // const downLink = useSection({ props: { count: count - 1 } });
  // const upLink = useSection({ props: { count: count + 1 } });

  console.log({
    heading,
    subText,
    instructions,
    gameProperties,
    customizeAssets,
  });

  const onLoad = (props) => {
    console.log("Window loaded", props);

    function hideClass(name) {
      var myClasses = document.querySelectorAll(name),
        i = 0,
        l = myClasses.length;

      for (i; i < l; i++) {
        myClasses[i].style.display = "none";
      }
    }
    (function (props) {
      "use strict";
      /**
       * T-Rex runner.
       * @param {string} outerContainerId Outer containing element id.
       * @param {object} opt_config
       * @constructor
       * @export
       */

      console.log({ props });
      function Runner(outerContainerId, opt_config) {
        // Singleton
        if (Runner.instance_) {
          return Runner.instance_;
        }
        Runner.instance_ = this;
        this.outerContainerEl = document.querySelector(outerContainerId);
        this.containerEl = null;
        this.detailsButton =
          this.outerContainerEl.querySelector("#details-button");
        this.config = opt_config || Runner.config;
        this.dimensions = Runner.defaultDimensions;
        this.canvas = null;
        this.canvasCtx = null;
        this.tRex = null;
        this.distanceMeter = null;
        this.distanceRan = 0;
        this.highestScore = 0;
        this.time = 0;
        this.runningTime = 0;
        this.msPerFrame = 1000 / FPS;
        this.currentSpeed = this.config.SPEED;
        this.obstacles = [];
        this.started = false;
        this.activated = false;
        this.crashed = false;
        this.paused = false;
        this.resizeTimerId_ = null;
        this.playCount = 0;
        // Sound FX.
        this.audioBuffer = null;
        this.soundFx = {};
        // Global web audio context for playing sounds.
        this.audioContext = null;
        // Images.
        this.images = {};
        this.imagesLoaded = 0;
        this.loadImages();
      }
      window["Runner"] = Runner;
      /**
       * Default game width.
       * @const
       */
      var DEFAULT_WIDTH = 600;
      /**
       * Frames per second.
       * @const
       */
      var FPS = 60;
      /** @const */
      var IS_HIDPI = window.devicePixelRatio > 1;
      /** @const */
      var IS_IOS =
        window.navigator.userAgent.indexOf("UIWebViewForStaticFileContent") >
        -1;
      /** @const */
      var IS_MOBILE = window.navigator.userAgent.indexOf("Mobi") > -1 || IS_IOS;
      /** @const */
      var IS_TOUCH_ENABLED = "ontouchstart" in window;
      /**
       * Default game configuration.
       * @enum {number}
       */
      var game = props.game;
      Runner.config = {
        ACCELERATION: game.acceleration,
        BG_CLOUD_SPEED: game.bgCloudSpeed,
        BOTTOM_PAD: game.bottomPad,
        CLEAR_TIME: game.clearTime,
        CLOUD_FREQUENCY: game.cloudFrequency,
        GAMEOVER_CLEAR_TIME: game.gameoverClearTime,
        GAP_COEFFICIENT: game.gapCoefficient,
        GRAVITY: game.gravity,
        INITIAL_JUMP_VELOCITY: game.initialJumpVelocity,
        MAX_CLOUDS: game.maxClouds,
        MAX_OBSTACLE_LENGTH: game.maxObstacleLength,
        MAX_SPEED: game.maxSpeed,
        MIN_JUMP_HEIGHT: game.minJumpHeight,
        MOBILE_SPEED_COEFFICIENT: game.mobileSpeedCoefficient,
        RESOURCE_TEMPLATE_ID: game.resourceTemplateId,
        SPEED: game.speed,
        SPEED_DROP_COEFFICIENT: game.speedDropCoefficient,
      };
      /**
       * Default dimensions.
       * @enum {string}
       */
      Runner.defaultDimensions = {
        WIDTH: DEFAULT_WIDTH,
        HEIGHT: 150,
      };
      /**
       * CSS class names.
       * @enum {string}
       */
      Runner.classes = {
        CANVAS: "runner-canvas",
        CONTAINER: "runner-container",
        CRASHED: "crashed",
        ICON: "icon-offline",
        TOUCH_CONTROLLER: "controller",
      };
      /**
       * Image source urls.
       * @enum {array.<object>}
       */
      Runner.imageSources = {
        LDPI: [
          { name: "CACTUS_LARGE", id: "1x-obstacle-large" },
          { name: "CACTUS_SMALL", id: "1x-obstacle-small" },
          { name: "CLOUD", id: "1x-cloud" },
          { name: "HORIZON", id: "1x-horizon" },
          { name: "RESTART", id: "1x-restart" },
          { name: "TEXT_SPRITE", id: "1x-text" },
          { name: "TREX", id: "1x-trex" },
        ],
        HDPI: [
          { name: "CACTUS_LARGE", id: "2x-obstacle-large" },
          { name: "CACTUS_SMALL", id: "2x-obstacle-small" },
          { name: "CLOUD", id: "2x-cloud" },
          { name: "HORIZON", id: "2x-horizon" },
          { name: "RESTART", id: "2x-restart" },
          { name: "TEXT_SPRITE", id: "2x-text" },
          { name: "TREX", id: "2x-trex" },
        ],
      };
      /**
       * Sound FX. Reference to the ID of the audio tag on interstitial page.
       * @enum {string}
       */
      Runner.sounds = {
        BUTTON_PRESS: "offline-sound-press",
        HIT: "offline-sound-hit",
        SCORE: "offline-sound-reached",
      };
      /**
       * Key code mapping.
       * @enum {object}
       */
      Runner.keycodes = {
        JUMP: { "38": 1, "32": 1 }, // Up, spacebar
        DUCK: { "40": 1 }, // Down
        RESTART: { "13": 1 }, // Enter
      };
      /**
       * Runner event names.
       * @enum {string}
       */
      Runner.events = {
        ANIM_END: "webkitAnimationEnd",
        CLICK: "click",
        KEYDOWN: "keydown",
        KEYUP: "keyup",
        MOUSEDOWN: "mousedown",
        MOUSEUP: "mouseup",
        RESIZE: "resize",
        TOUCHEND: "touchend",
        TOUCHSTART: "touchstart",
        VISIBILITY: "visibilitychange",
        BLUR: "blur",
        FOCUS: "focus",
        LOAD: "load",
      };
      Runner.prototype = {
        /**
         * Setting individual settings for debugging.
         * @param {string} setting
         * @param {*} value
         */
        updateConfigSetting: function (setting, value) {
          if (setting in this.config && value != undefined) {
            this.config[setting] = value;
            switch (setting) {
              case "GRAVITY":
              case "MIN_JUMP_HEIGHT":
              case "SPEED_DROP_COEFFICIENT":
                this.tRex.config[setting] = value;
                break;
              case "INITIAL_JUMP_VELOCITY":
                this.tRex.setJumpVelocity(value);
                break;
              case "SPEED":
                this.setSpeed(value);
                break;
            }
          }
        },
        /**
         * Load and cache the image assets from the page.
         */
        loadImages: function () {
          var imageSources = IS_HIDPI
            ? Runner.imageSources.HDPI
            : Runner.imageSources.LDPI;
          var numImages = imageSources.length;
          for (var i = numImages - 1; i >= 0; i--) {
            var imgSource = imageSources[i];
            this.images[imgSource.name] = document.getElementById(imgSource.id);
          }
          this.init();
        },
        /**
         * Load and decode base 64 encoded sounds.
         */
        loadSounds: function () {
          if (!IS_IOS) {
            this.audioContext = new AudioContext();
            var resourceTemplate = document.getElementById(
              this.config.RESOURCE_TEMPLATE_ID
            ).content;
            for (var sound in Runner.sounds) {
              var soundSrc = resourceTemplate.getElementById(
                Runner.sounds[sound]
              ).src;
              soundSrc = soundSrc.substr(soundSrc.indexOf(",") + 1);
              var buffer = decodeBase64ToArrayBuffer(soundSrc);
              // Async, so no guarantee of order in array.
              this.audioContext.decodeAudioData(
                buffer,
                function (index, audioData) {
                  this.soundFx[index] = audioData;
                }.bind(this, sound)
              );
            }
          }
        },
        /**
         * Sets the game speed. Adjust the speed accordingly if on a smaller screen.
         * @param {number} opt_speed
         */
        setSpeed: function (opt_speed) {
          var speed = opt_speed || this.currentSpeed;
          // Reduce the speed on smaller mobile screens.
          if (this.dimensions.WIDTH < DEFAULT_WIDTH) {
            var mobileSpeed =
              ((speed * this.dimensions.WIDTH) / DEFAULT_WIDTH) *
              this.config.MOBILE_SPEED_COEFFICIENT;
            this.currentSpeed = mobileSpeed > speed ? speed : mobileSpeed;
          } else if (opt_speed) {
            this.currentSpeed = opt_speed;
          }
        },
        /**
         * Game initialiser.
         */
        init: function () {
          // Hide the static icon.
          //document.querySelector('.' + Runner.classes.ICON).style.visibility = 'hidden';
          this.adjustDimensions();
          this.setSpeed();
          this.containerEl = document.createElement("div");
          this.containerEl.className = Runner.classes.CONTAINER;
          // Player canvas container.
          this.canvas = createCanvas(
            this.containerEl,
            this.dimensions.WIDTH,
            this.dimensions.HEIGHT,
            Runner.classes.PLAYER
          );
          this.canvasCtx = this.canvas.getContext("2d");
          this.canvasCtx.fillStyle = "#f7f7f7";
          this.canvasCtx.fill();
          Runner.updateCanvasScaling(this.canvas);
          // Horizon contains clouds, obstacles and the ground.
          this.horizon = new Horizon(
            this.canvas,
            this.images,
            this.dimensions,
            this.config.GAP_COEFFICIENT
          );
          // Distance meter
          this.distanceMeter = new DistanceMeter(
            this.canvas,
            this.images.TEXT_SPRITE,
            this.dimensions.WIDTH
          );
          // Draw t-rex
          this.tRex = new Trex(this.canvas, this.images.TREX);
          this.outerContainerEl.appendChild(this.containerEl);
          if (IS_MOBILE) {
            this.createTouchController();
          }
          this.startListening();
          this.update();
          window.addEventListener(
            Runner.events.RESIZE,
            this.debounceResize.bind(this)
          );
        },
        /**
         * Create the touch controller. A div that covers whole screen.
         */
        createTouchController: function () {
          this.touchController = document.createElement("div");
          this.touchController.className = Runner.classes.TOUCH_CONTROLLER;
        },
        /**
         * Debounce the resize event.
         */
        debounceResize: function () {
          if (!this.resizeTimerId_) {
            this.resizeTimerId_ = setInterval(
              this.adjustDimensions.bind(this),
              250
            );
          }
        },
        /**
         * Adjust game space dimensions on resize.
         */
        adjustDimensions: function () {
          clearInterval(this.resizeTimerId_);
          this.resizeTimerId_ = null;
          var boxStyles = window.getComputedStyle(this.outerContainerEl);
          var padding = Number(
            boxStyles.paddingLeft.substr(0, boxStyles.paddingLeft.length - 2)
          );
          this.dimensions.WIDTH =
            this.outerContainerEl.offsetWidth - padding * 2;
          // Redraw the elements back onto the canvas.
          if (this.canvas) {
            this.canvas.width = this.dimensions.WIDTH;
            this.canvas.height = this.dimensions.HEIGHT;
            Runner.updateCanvasScaling(this.canvas);
            this.distanceMeter.calcXPos(this.dimensions.WIDTH);
            this.clearCanvas();
            this.horizon.update(0, 0, true);
            this.tRex.update(0);
            // Outer container and distance meter.
            if (this.activated || this.crashed) {
              this.containerEl.style.width = this.dimensions.WIDTH + "px";
              this.containerEl.style.height = this.dimensions.HEIGHT + "px";
              this.distanceMeter.update(0, Math.ceil(this.distanceRan));
              this.stop();
            } else {
              this.tRex.draw(0, 0);
            }
            // Game over panel.
            if (this.crashed && this.gameOverPanel) {
              this.gameOverPanel.updateDimensions(this.dimensions.WIDTH);
              this.gameOverPanel.draw();
            }
          }
        },
        /**
         * Play the game intro.
         * Canvas container width expands out to the full width.
         */
        playIntro: function () {
          if (!this.started && !this.crashed) {
            this.playingIntro = true;
            this.tRex.playingIntro = true;
            // CSS animation definition.
            var keyframes =
              "@-webkit-keyframes intro { " +
              "from { width:" +
              Trex.config.WIDTH +
              "px }" +
              "to { width: " +
              this.dimensions.WIDTH +
              "px }" +
              "}";
            document.styleSheets[0].insertRule(keyframes, 0);
            this.containerEl.addEventListener(
              Runner.events.ANIM_END,
              this.startGame.bind(this)
            );
            this.containerEl.style.webkitAnimation =
              "intro .4s ease-out 1 both";
            this.containerEl.style.width = this.dimensions.WIDTH + "px";
            if (this.touchController) {
              this.outerContainerEl.appendChild(this.touchController);
            }
            this.activated = true;
            this.started = true;
          } else if (this.crashed) {
            this.restart();
          }
        },
        /**
         * Update the game status to started.
         */
        startGame: function () {
          this.runningTime = 0;
          this.playingIntro = false;
          this.tRex.playingIntro = false;
          this.containerEl.style.webkitAnimation = "";
          this.playCount++;
          // Handle tabbing off the page. Pause the current game.
          window.addEventListener(
            Runner.events.VISIBILITY,
            this.onVisibilityChange.bind(this)
          );
          window.addEventListener(
            Runner.events.BLUR,
            this.onVisibilityChange.bind(this)
          );
          window.addEventListener(
            Runner.events.FOCUS,
            this.onVisibilityChange.bind(this)
          );
        },
        clearCanvas: function () {
          this.canvasCtx.clearRect(
            0,
            0,
            this.dimensions.WIDTH,
            this.dimensions.HEIGHT
          );
        },
        /**
         * Update the game frame.
         */
        update: function () {
          this.drawPending = false;
          var now = getTimeStamp();
          var deltaTime = now - (this.time || now);
          this.time = now;
          if (this.activated) {
            this.clearCanvas();
            if (this.tRex.jumping) {
              this.tRex.updateJump(deltaTime, this.config);
            }
            this.runningTime += deltaTime;
            var hasObstacles = this.runningTime > this.config.CLEAR_TIME;
            // First jump triggers the intro.
            if (this.tRex.jumpCount == 1 && !this.playingIntro) {
              this.playIntro();
            }
            // The horizon doesn't move until the intro is over.
            if (this.playingIntro) {
              this.horizon.update(0, this.currentSpeed, hasObstacles);
            } else {
              deltaTime = !this.started ? 0 : deltaTime;
              this.horizon.update(deltaTime, this.currentSpeed, hasObstacles);
            }
            // Check for collisions.
            var collision =
              hasObstacles &&
              checkForCollision(this.horizon.obstacles[0], this.tRex);
            if (!collision) {
              this.distanceRan +=
                (this.currentSpeed * deltaTime) / this.msPerFrame;
              if (this.currentSpeed < this.config.MAX_SPEED) {
                this.currentSpeed += this.config.ACCELERATION;
              }
            } else {
              this.gameOver();
            }
            if (
              this.distanceMeter.getActualDistance(this.distanceRan) >
              this.distanceMeter.maxScore
            ) {
              this.distanceRan = 0;
            }
            var playAcheivementSound = this.distanceMeter.update(
              deltaTime,
              Math.ceil(this.distanceRan)
            );
            if (playAcheivementSound) {
              this.playSound(this.soundFx.SCORE);
            }
          }
          if (!this.crashed) {
            this.tRex.update(deltaTime);
            this.raq();
          }
        },
        /**
         * Event handler.
         */
        handleEvent: function (e) {
          return function (evtType, events) {
            switch (evtType) {
              case events.KEYDOWN:
              case events.TOUCHSTART:
              case events.MOUSEDOWN:
                this.onKeyDown(e);
                break;
              case events.KEYUP:
              case events.TOUCHEND:
              case events.MOUSEUP:
                this.onKeyUp(e);
                break;
            }
          }.bind(this)(e.type, Runner.events);
        },
        /**
         * Bind relevant key / mouse / touch listeners.
         */
        startListening: function () {
          // Keys.
          document.addEventListener(Runner.events.KEYDOWN, this);
          document.addEventListener(Runner.events.KEYUP, this);
          if (IS_MOBILE) {
            // Mobile only touch devices.
            this.touchController.addEventListener(
              Runner.events.TOUCHSTART,
              this
            );
            this.touchController.addEventListener(Runner.events.TOUCHEND, this);
            this.containerEl.addEventListener(Runner.events.TOUCHSTART, this);
          } else {
            // Mouse.
            document.addEventListener(Runner.events.MOUSEDOWN, this);
            document.addEventListener(Runner.events.MOUSEUP, this);
          }
        },
        /**
         * Remove all listeners.
         */
        stopListening: function () {
          document.removeEventListener(Runner.events.KEYDOWN, this);
          document.removeEventListener(Runner.events.KEYUP, this);
          if (IS_MOBILE) {
            this.touchController.removeEventListener(
              Runner.events.TOUCHSTART,
              this
            );
            this.touchController.removeEventListener(
              Runner.events.TOUCHEND,
              this
            );
            this.containerEl.removeEventListener(
              Runner.events.TOUCHSTART,
              this
            );
          } else {
            document.removeEventListener(Runner.events.MOUSEDOWN, this);
            document.removeEventListener(Runner.events.MOUSEUP, this);
          }
        },
        /**
         * Process keydown.
         * @param {Event} e
         */
        onKeyDown: function (e) {
          if (e.target != this.detailsButton) {
            if (
              !this.crashed &&
              (Runner.keycodes.JUMP[String(e.keyCode)] ||
                e.type == Runner.events.TOUCHSTART)
            ) {
              if (!this.activated) {
                this.loadSounds();
                this.activated = true;
              }
              if (!this.tRex.jumping) {
                this.playSound(this.soundFx.BUTTON_PRESS);
                this.tRex.startJump();
              }
            }
            if (
              this.crashed &&
              e.type == Runner.events.TOUCHSTART &&
              e.currentTarget == this.containerEl
            ) {
              this.restart();
            }
          }
          // Speed drop, activated only when jump key is not pressed.
          if (Runner.keycodes.DUCK[e.keyCode] && this.tRex.jumping) {
            e.preventDefault();
            this.tRex.setSpeedDrop();
          }
        },
        /**
         * Process key up.
         * @param {Event} e
         */
        onKeyUp: function (e) {
          var keyCode = String(e.keyCode);
          var isjumpKey =
            Runner.keycodes.JUMP[keyCode] ||
            e.type == Runner.events.TOUCHEND ||
            e.type == Runner.events.MOUSEDOWN;
          if (this.isRunning() && isjumpKey) {
            this.tRex.endJump();
          } else if (Runner.keycodes.DUCK[keyCode]) {
            this.tRex.speedDrop = false;
          } else if (this.crashed) {
            // Check that enough time has elapsed before allowing jump key to restart.
            var deltaTime = getTimeStamp() - this.time;
            if (
              Runner.keycodes.RESTART[keyCode] ||
              (e.type == Runner.events.MOUSEUP && e.target == this.canvas) ||
              (deltaTime >= this.config.GAMEOVER_CLEAR_TIME &&
                Runner.keycodes.JUMP[keyCode])
            ) {
              this.restart();
            }
          } else if (this.paused && isjumpKey) {
            this.play();
          }
        },
        /**
         * RequestAnimationFrame wrapper.
         */
        raq: function () {
          if (!this.drawPending) {
            this.drawPending = true;
            this.raqId = requestAnimationFrame(this.update.bind(this));
          }
        },
        /**
         * Whether the game is running.
         * @return {boolean}
         */
        isRunning: function () {
          return !!this.raqId;
        },
        /**
         * Game over state.
         */
        gameOver: function () {
          this.playSound(this.soundFx.HIT);
          vibrate(200);
          this.stop();
          this.crashed = true;
          this.distanceMeter.acheivement = false;
          this.tRex.update(100, Trex.status.CRASHED);
          // Game over panel.
          if (!this.gameOverPanel) {
            this.gameOverPanel = new GameOverPanel(
              this.canvas,
              this.images.TEXT_SPRITE,
              this.images.RESTART,
              this.dimensions
            );
          } else {
            this.gameOverPanel.draw();
          }
          // Update the high score.
          if (this.distanceRan > this.highestScore) {
            this.highestScore = Math.ceil(this.distanceRan);
            this.distanceMeter.setHighScore(this.highestScore);
          }
          // Reset the time clock.
          this.time = getTimeStamp();
        },
        stop: function () {
          this.activated = false;
          this.paused = true;
          cancelAnimationFrame(this.raqId);
          this.raqId = 0;
        },
        play: function () {
          if (!this.crashed) {
            this.activated = true;
            this.paused = false;
            this.tRex.update(0, Trex.status.RUNNING);
            this.time = getTimeStamp();
            this.update();
          }
        },
        restart: function () {
          if (!this.raqId) {
            this.playCount++;
            this.runningTime = 0;
            this.activated = true;
            this.crashed = false;
            this.distanceRan = 0;
            this.setSpeed(this.config.SPEED);
            this.time = getTimeStamp();
            this.containerEl.classList.remove(Runner.classes.CRASHED);
            this.clearCanvas();
            this.distanceMeter.reset(this.highestScore);
            this.horizon.reset();
            this.tRex.reset();
            this.playSound(this.soundFx.BUTTON_PRESS);
            this.update();
          }
        },
        /**
         * Pause the game if the tab is not in focus.
         */
        onVisibilityChange: function (e) {
          if (document.hidden || document.webkitHidden || e.type == "blur") {
            this.stop();
          } else {
            this.play();
          }
        },
        /**
         * Play a sound.
         * @param {SoundBuffer} soundBuffer
         */
        playSound: function (soundBuffer) {
          if (soundBuffer) {
            var sourceNode = this.audioContext.createBufferSource();
            sourceNode.buffer = soundBuffer;
            sourceNode.connect(this.audioContext.destination);
            sourceNode.start(0);
          }
        },
      };
      /**
       * Updates the canvas size taking into
       * account the backing store pixel ratio and
       * the device pixel ratio.
       *
       * See article by Paul Lewis:
       * https://www.html5rocks.com/en/tutorials/canvas/hidpi/
       *
       * @param {HTMLCanvasElement} canvas
       * @param {number} opt_width
       * @param {number} opt_height
       * @return {boolean} Whether the canvas was scaled.
       */
      Runner.updateCanvasScaling = function (canvas, opt_width, opt_height) {
        var context = canvas.getContext("2d");
        // Query the various pixel ratios
        var devicePixelRatio = Math.floor(window.devicePixelRatio) || 1;
        var backingStoreRatio =
          Math.floor(context.webkitBackingStorePixelRatio) || 1;
        var ratio = devicePixelRatio / backingStoreRatio;
        // Upscale the canvas if the two ratios don't match
        if (devicePixelRatio !== backingStoreRatio) {
          var oldWidth = opt_width || canvas.width;
          var oldHeight = opt_height || canvas.height;
          canvas.width = oldWidth * ratio;
          canvas.height = oldHeight * ratio;
          canvas.style.width = oldWidth + "px";
          canvas.style.height = oldHeight + "px";
          // Scale the context to counter the fact that we've manually scaled
          // our canvas element.
          context.scale(ratio, ratio);
          return true;
        }
        return false;
      };
      /**
       * Get random number.
       * @param {number} min
       * @param {number} max
       * @param {number}
       */
      function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      /**
       * Vibrate on mobile devices.
       * @param {number} duration Duration of the vibration in milliseconds.
       */
      function vibrate(duration) {
        if (IS_MOBILE && window.navigator.vibrate) {
          window.navigator.vibrate(duration);
        }
      }
      /**
       * Create canvas element.
       * @param {HTMLElement} container Element to append canvas to.
       * @param {number} width
       * @param {number} height
       * @param {string} opt_classname
       * @return {HTMLCanvasElement}
       */
      function createCanvas(container, width, height, opt_classname) {
        var canvas = document.createElement("canvas");
        canvas.className = opt_classname
          ? Runner.classes.CANVAS + " " + opt_classname
          : Runner.classes.CANVAS;
        canvas.width = width;
        canvas.height = height;
        container.appendChild(canvas);
        return canvas;
      }
      /**
       * Decodes the base 64 audio to ArrayBuffer used by Web Audio.
       * @param {string} base64String
       */
      function decodeBase64ToArrayBuffer(base64String) {
        var len = (base64String.length / 4) * 3;
        var str = atob(base64String);
        var arrayBuffer = new ArrayBuffer(len);
        var bytes = new Uint8Array(arrayBuffer);
        for (var i = 0; i < len; i++) {
          bytes[i] = str.charCodeAt(i);
        }
        return bytes.buffer;
      }
      /**
       * Return the current timestamp.
       * @return {number}
       */
      function getTimeStamp() {
        return IS_IOS ? new Date().getTime() : performance.now();
      }
      //******************************************************************************
      /**
       * Game over panel.
       * @param {!HTMLCanvasElement} canvas
       * @param {!HTMLImage} textSprite
       * @param {!HTMLImage} restartImg
       * @param {!Object} dimensions Canvas dimensions.
       * @constructor
       */
      function GameOverPanel(canvas, textSprite, restartImg, dimensions) {
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext("2d");
        this.canvasDimensions = dimensions;
        this.textSprite = textSprite;
        this.restartImg = restartImg;
        this.draw();
      }
      /**
       * Dimensions used in the panel.
       * @enum {number}
       */
      GameOverPanel.dimensions = {
        TEXT_X: 0,
        TEXT_Y: 13,
        TEXT_WIDTH: 191,
        TEXT_HEIGHT: 11,
        RESTART_WIDTH: 36,
        RESTART_HEIGHT: 32,
      };
      GameOverPanel.prototype = {
        /**
         * Update the panel dimensions.
         * @param {number} width New canvas width.
         * @param {number} opt_height Optional new canvas height.
         */
        updateDimensions: function (width, opt_height) {
          this.canvasDimensions.WIDTH = width;
          if (opt_height) {
            this.canvasDimensions.HEIGHT = opt_height;
          }
        },
        /**
         * Draw the panel.
         */
        draw: function () {
          var dimensions = GameOverPanel.dimensions;
          var centerX = this.canvasDimensions.WIDTH / 2;
          // Game over text.
          var textSourceX = dimensions.TEXT_X;
          var textSourceY = dimensions.TEXT_Y;
          var textSourceWidth = dimensions.TEXT_WIDTH;
          var textSourceHeight = dimensions.TEXT_HEIGHT;
          var textTargetX = Math.round(centerX - dimensions.TEXT_WIDTH / 2);
          var textTargetY = Math.round((this.canvasDimensions.HEIGHT - 25) / 3);
          var textTargetWidth = dimensions.TEXT_WIDTH;
          var textTargetHeight = dimensions.TEXT_HEIGHT;
          var restartSourceWidth = dimensions.RESTART_WIDTH;
          var restartSourceHeight = dimensions.RESTART_HEIGHT;
          var restartTargetX = centerX - dimensions.RESTART_WIDTH / 2;
          var restartTargetY = this.canvasDimensions.HEIGHT / 2;
          if (IS_HIDPI) {
            textSourceY *= 2;
            textSourceX *= 2;
            textSourceWidth *= 2;
            textSourceHeight *= 2;
            restartSourceWidth *= 2;
            restartSourceHeight *= 2;
          }
          // Game over text from sprite.
          this.canvasCtx.drawImage(
            this.textSprite,
            textSourceX,
            textSourceY,
            textSourceWidth,
            textSourceHeight,
            textTargetX,
            textTargetY,
            textTargetWidth,
            textTargetHeight
          );
          // Restart button.
          this.canvasCtx.drawImage(
            this.restartImg,
            0,
            0,
            restartSourceWidth,
            restartSourceHeight,
            restartTargetX,
            restartTargetY,
            dimensions.RESTART_WIDTH,
            dimensions.RESTART_HEIGHT
          );
        },
      };
      //******************************************************************************
      /**
       * Check for a collision.
       * @param {!Obstacle} obstacle
       * @param {!Trex} tRex T-rex object.
       * @param {HTMLCanvasContext} opt_canvasCtx Optional canvas context for drawing
       * collision boxes.
       * @return {Array.<CollisionBox>}
       */
      function checkForCollision(obstacle, tRex, opt_canvasCtx) {
        var obstacleBoxXPos = Runner.defaultDimensions.WIDTH + obstacle.xPos;
        // Adjustments are made to the bounding box as there is a 1 pixel white
        // border around the t-rex and obstacles.
        var tRexBox = new CollisionBox(
          tRex.xPos + 1,
          tRex.yPos + 1,
          tRex.config.WIDTH - 2,
          tRex.config.HEIGHT - 2
        );
        var obstacleBox = new CollisionBox(
          obstacle.xPos + 1,
          obstacle.yPos + 1,
          obstacle.typeConfig.width * obstacle.size - 2,
          obstacle.typeConfig.height - 2
        );
        // Debug outer box
        if (opt_canvasCtx) {
          drawCollisionBoxes(opt_canvasCtx, tRexBox, obstacleBox);
        }
        // Simple outer bounds check.
        if (boxCompare(tRexBox, obstacleBox)) {
          var collisionBoxes = obstacle.collisionBoxes;
          var tRexCollisionBoxes = Trex.collisionBoxes;
          // Detailed axis aligned box check.
          for (var t = 0; t < tRexCollisionBoxes.length; t++) {
            for (var i = 0; i < collisionBoxes.length; i++) {
              // Adjust the box to actual positions.
              var adjTrexBox = createAdjustedCollisionBox(
                tRexCollisionBoxes[t],
                tRexBox
              );
              var adjObstacleBox = createAdjustedCollisionBox(
                collisionBoxes[i],
                obstacleBox
              );
              var crashed = boxCompare(adjTrexBox, adjObstacleBox);
              // Draw boxes for debug.
              if (opt_canvasCtx) {
                drawCollisionBoxes(opt_canvasCtx, adjTrexBox, adjObstacleBox);
              }
              if (crashed) {
                return [adjTrexBox, adjObstacleBox];
              }
            }
          }
        }
        return false;
      }
      /**
       * Adjust the collision box.
       * @param {!CollisionBox} box The original box.
       * @param {!CollisionBox} adjustment Adjustment box.
       * @return {CollisionBox} The adjusted collision box object.
       */
      function createAdjustedCollisionBox(box, adjustment) {
        return new CollisionBox(
          box.x + adjustment.x,
          box.y + adjustment.y,
          box.width,
          box.height
        );
      }
      /**
       * Draw the collision boxes for debug.
       */
      function drawCollisionBoxes(canvasCtx, tRexBox, obstacleBox) {
        canvasCtx.save();
        canvasCtx.strokeStyle = "#f00";
        canvasCtx.strokeRect(
          tRexBox.x,
          tRexBox.y,
          tRexBox.width,
          tRexBox.height
        );
        canvasCtx.strokeStyle = "#0f0";
        canvasCtx.strokeRect(
          obstacleBox.x,
          obstacleBox.y,
          obstacleBox.width,
          obstacleBox.height
        );
        canvasCtx.restore();
      }
      /**
       * Compare two collision boxes for a collision.
       * @param {CollisionBox} tRexBox
       * @param {CollisionBox} obstacleBox
       * @return {boolean} Whether the boxes intersected.
       */
      function boxCompare(tRexBox, obstacleBox) {
        var crashed = false;
        var tRexBoxX = tRexBox.x;
        var tRexBoxY = tRexBox.y;
        var obstacleBoxX = obstacleBox.x;
        var obstacleBoxY = obstacleBox.y;
        // Axis-Aligned Bounding Box method.
        if (
          tRexBox.x < obstacleBoxX + obstacleBox.width &&
          tRexBox.x + tRexBox.width > obstacleBoxX &&
          tRexBox.y < obstacleBox.y + obstacleBox.height &&
          tRexBox.height + tRexBox.y > obstacleBox.y
        ) {
          crashed = true;
        }
        return crashed;
      }
      //******************************************************************************
      /**
       * Collision box object.
       * @param {number} x X position.
       * @param {number} y Y Position.
       * @param {number} w Width.
       * @param {number} h Height.
       */
      function CollisionBox(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
      }
      //******************************************************************************
      /**
       * Obstacle.
       * @param {HTMLCanvasCtx} canvasCtx
       * @param {Obstacle.type} type
       * @param {image} obstacleImg Image sprite.
       * @param {Object} dimensions
       * @param {number} gapCoefficient Mutipler in determining the gap.
       * @param {number} speed
       */
      function Obstacle(
        canvasCtx,
        type,
        obstacleImg,
        dimensions,
        gapCoefficient,
        speed
      ) {
        this.canvasCtx = canvasCtx;
        this.image = obstacleImg;
        this.typeConfig = type;
        this.gapCoefficient = gapCoefficient;
        this.size = getRandomNum(1, Obstacle.MAX_OBSTACLE_LENGTH);
        this.dimensions = dimensions;
        this.remove = false;
        this.xPos = 0;
        this.yPos = this.typeConfig.yPos;
        this.width = 0;
        this.collisionBoxes = [];
        this.gap = 0;
        this.init(speed);
      }
      /**
       * Coefficient for calculating the maximum gap.
       * @const
       */
      Obstacle.MAX_GAP_COEFFICIENT = 1.5;
      /**
       * Maximum obstacle grouping count.
       * @const
       */
      (Obstacle.MAX_OBSTACLE_LENGTH = 3),
        (Obstacle.prototype = {
          /**
           * Initialise the DOM for the obstacle.
           * @param {number} speed
           */
          init: function (speed) {
            this.cloneCollisionBoxes();
            // Only allow sizing if we're at the right speed.
            if (this.size > 1 && this.typeConfig.multipleSpeed > speed) {
              this.size = 1;
            }
            this.width = this.typeConfig.width * this.size;
            this.xPos = this.dimensions.WIDTH - this.width;
            this.draw();
            // Make collision box adjustments,
            // Central box is adjusted to the size as one box.
            // ____ ______ ________
            // _| |-| _| |-| _| |-|
            // | |<->| | | |<--->| | | |<----->| |
            // | | 1 | | | | 2 | | | | 3 | |
            // |_|___|_| |_|_____|_| |_|_______|_|
            //
            if (this.size > 1) {
              this.collisionBoxes[1].width =
                this.width -
                this.collisionBoxes[0].width -
                this.collisionBoxes[2].width;
              this.collisionBoxes[2].x =
                this.width - this.collisionBoxes[2].width;
            }
            this.gap = this.getGap(this.gapCoefficient, speed);
          },
          /**
           * Draw and crop based on size.
           */
          draw: function () {
            var sourceWidth = this.typeConfig.width;
            var sourceHeight = this.typeConfig.height;
            if (IS_HIDPI) {
              sourceWidth = sourceWidth * 2;
              sourceHeight = sourceHeight * 2;
            }
            // Sprite
            var sourceX = sourceWidth * this.size * (0.5 * (this.size - 1));
            this.canvasCtx.drawImage(
              this.image,
              sourceX,
              0,
              sourceWidth * this.size,
              sourceHeight,
              this.xPos,
              this.yPos,
              this.typeConfig.width * this.size,
              this.typeConfig.height
            );
          },
          /**
           * Obstacle frame update.
           * @param {number} deltaTime
           * @param {number} speed
           */
          update: function (deltaTime, speed) {
            if (!this.remove) {
              this.xPos -= Math.floor(((speed * FPS) / 1000) * deltaTime);
              this.draw();
              if (!this.isVisible()) {
                this.remove = true;
              }
            }
          },
          /**
           * Calculate a random gap size.
           * - Minimum gap gets wider as speed increses
           * @param {number} gapCoefficient
           * @param {number} speed
           * @return {number} The gap size.
           */
          getGap: function (gapCoefficient, speed) {
            var minGap = Math.round(
              this.width * speed + this.typeConfig.minGap * gapCoefficient
            );
            var maxGap = Math.round(minGap * Obstacle.MAX_GAP_COEFFICIENT);
            return getRandomNum(minGap, maxGap);
          },
          /**
           * Check if obstacle is visible.
           * @return {boolean} Whether the obstacle is in the game area.
           */
          isVisible: function () {
            return this.xPos + this.width > 0;
          },
          /**
           * Make a copy of the collision boxes, since these will change based on
           * obstacle type and size.
           */
          cloneCollisionBoxes: function () {
            var collisionBoxes = this.typeConfig.collisionBoxes;
            for (var i = collisionBoxes.length - 1; i >= 0; i--) {
              this.collisionBoxes[i] = new CollisionBox(
                collisionBoxes[i].x,
                collisionBoxes[i].y,
                collisionBoxes[i].width,
                collisionBoxes[i].height
              );
            }
          },
        });
      /**
       * Obstacle definitions.
       * minGap: minimum pixel space betweeen obstacles.
       * multipleSpeed: Speed at which multiples are allowed.
       */
      Obstacle.types = [
        {
          type: "CACTUS_SMALL",
          className: " cactus cactus-small ",
          width: 17,
          height: 35,
          yPos: 105,
          multipleSpeed: 3,
          minGap: 120,
          collisionBoxes: [
            new CollisionBox(0, 7, 5, 27),
            new CollisionBox(4, 0, 6, 34),
            new CollisionBox(10, 4, 7, 14),
          ],
        },
        {
          type: "CACTUS_LARGE",
          className: " cactus cactus-large ",
          width: 25,
          height: 50,
          yPos: 90,
          multipleSpeed: 6,
          minGap: 120,
          collisionBoxes: [
            new CollisionBox(0, 12, 7, 38),
            new CollisionBox(8, 0, 7, 49),
            new CollisionBox(13, 10, 10, 38),
          ],
        },
      ];
      //******************************************************************************
      /**
       * T-rex game character.
       * @param {HTMLCanvas} canvas
       * @param {HTMLImage} image Character image.
       * @constructor
       */
      function Trex(canvas, image) {
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext("2d");
        this.image = image;
        this.xPos = 0;
        this.yPos = 0;
        // Position when on the ground.
        this.groundYPos = 0;
        this.currentFrame = 0;
        this.currentAnimFrames = [];
        this.blinkDelay = 0;
        this.animStartTime = 0;
        this.timer = 0;
        this.msPerFrame = 1000 / FPS;
        this.config = Trex.config;
        // Current status.
        this.status = Trex.status.WAITING;
        this.jumping = false;
        this.jumpVelocity = 0;
        this.reachedMinHeight = false;
        this.speedDrop = false;
        this.jumpCount = 0;
        this.jumpspotX = 0;
        this.init();
      }
      /**
       * T-rex player config.
       * @enum {number}
       */
      Trex.config = {
        DROP_VELOCITY: -5,
        GRAVITY: 0.6,
        HEIGHT: 47,
        INIITAL_JUMP_VELOCITY: -10,
        INTRO_DURATION: 1500,
        MAX_JUMP_HEIGHT: 30,
        MIN_JUMP_HEIGHT: 30,
        SPEED_DROP_COEFFICIENT: 3,
        SPRITE_WIDTH: 262,
        START_X_POS: 50,
        WIDTH: 44,
      };
      /**
       * Used in collision detection.
       * @type {Array.<CollisionBox>}
       */
      Trex.collisionBoxes = [
        new CollisionBox(1, -1, 30, 26),
        new CollisionBox(32, 0, 8, 16),
        new CollisionBox(10, 35, 14, 8),
        new CollisionBox(1, 24, 29, 5),
        new CollisionBox(5, 30, 21, 4),
        new CollisionBox(9, 34, 15, 4),
      ];
      /**
       * Animation states.
       * @enum {string}
       */
      Trex.status = {
        CRASHED: "CRASHED",
        JUMPING: "JUMPING",
        RUNNING: "RUNNING",
        WAITING: "WAITING",
      };
      /**
       * Blinking coefficient.
       * @const
       */
      Trex.BLINK_TIMING = 7000;
      /**
       * Animation config for different states.
       * @enum {object}
       */
      Trex.animFrames = {
        WAITING: {
          frames: [44, 0],
          msPerFrame: 1000 / 3,
        },
        RUNNING: {
          frames: [88, 132],
          msPerFrame: 1000 / 12,
        },
        CRASHED: {
          frames: [220],
          msPerFrame: 1000 / 60,
        },
        JUMPING: {
          frames: [0],
          msPerFrame: 1000 / 60,
        },
      };
      Trex.prototype = {
        /**
         * T-rex player initaliser.
         * Sets the t-rex to blink at random intervals.
         */
        init: function () {
          this.blinkDelay = this.setBlinkDelay();
          this.groundYPos =
            Runner.defaultDimensions.HEIGHT -
            this.config.HEIGHT -
            Runner.config.BOTTOM_PAD;
          this.yPos = this.groundYPos;
          this.minJumpHeight = this.groundYPos - this.config.MIN_JUMP_HEIGHT;
          this.draw(0, 0);
          this.update(0, Trex.status.WAITING);
        },
        /**
         * Setter for the jump velocity.
         * The approriate drop velocity is also set.
         */
        setJumpVelocity: function (setting) {
          this.config.INIITAL_JUMP_VELOCITY = -setting;
          this.config.DROP_VELOCITY = -setting / 2;
        },
        /**
         * Set the animation status.
         * @param {!number} deltaTime
         * @param {Trex.status} status Optional status to switch to.
         */
        update: function (deltaTime, opt_status) {
          this.timer += deltaTime;
          // Update the status.
          if (opt_status) {
            this.status = opt_status;
            this.currentFrame = 0;
            this.msPerFrame = Trex.animFrames[opt_status].msPerFrame;
            this.currentAnimFrames = Trex.animFrames[opt_status].frames;
            if (opt_status == Trex.status.WAITING) {
              this.animStartTime = getTimeStamp();
              this.setBlinkDelay();
            }
          }
          // Game intro animation, T-rex moves in from the left.
          if (this.playingIntro && this.xPos < this.config.START_X_POS) {
            this.xPos += Math.round(
              (this.config.START_X_POS / this.config.INTRO_DURATION) * deltaTime
            );
          }
          if (this.status == Trex.status.WAITING) {
            this.blink(getTimeStamp());
          } else {
            this.draw(this.currentAnimFrames[this.currentFrame], 0);
          }
          // Update the frame position.
          if (this.timer >= this.msPerFrame) {
            this.currentFrame =
              this.currentFrame == this.currentAnimFrames.length - 1
                ? 0
                : this.currentFrame + 1;
            this.timer = 0;
          }
        },
        /**
         * Draw the t-rex to a particular position.
         * @param {number} x
         * @param {number} y
         */
        draw: function (x, y) {
          var sourceX = x;
          var sourceY = y;
          var sourceWidth = this.config.WIDTH;
          var sourceHeight = this.config.HEIGHT;
          if (IS_HIDPI) {
            sourceX *= 2;
            sourceY *= 2;
            sourceWidth *= 2;
            sourceHeight *= 2;
          }
          this.canvasCtx.drawImage(
            this.image,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight,
            this.xPos,
            this.yPos,
            this.config.WIDTH,
            this.config.HEIGHT
          );
        },
        /**
         * Sets a random time for the blink to happen.
         */
        setBlinkDelay: function () {
          this.blinkDelay = Math.ceil(Math.random() * Trex.BLINK_TIMING);
        },
        /**
         * Make t-rex blink at random intervals.
         * @param {number} time Current time in milliseconds.
         */
        blink: function (time) {
          var deltaTime = time - this.animStartTime;
          if (deltaTime >= this.blinkDelay) {
            this.draw(this.currentAnimFrames[this.currentFrame], 0);
            if (this.currentFrame == 1) {
              // Set new random delay to blink.
              this.setBlinkDelay();
              this.animStartTime = time;
            }
          }
        },
        /**
         * Initialise a jump.
         */
        startJump: function () {
          if (!this.jumping) {
            this.update(0, Trex.status.JUMPING);
            this.jumpVelocity = this.config.INIITAL_JUMP_VELOCITY;
            this.jumping = true;
            this.reachedMinHeight = false;
            this.speedDrop = false;
          }
        },
        /**
         * Jump is complete, falling down.
         */
        endJump: function () {
          if (
            this.reachedMinHeight &&
            this.jumpVelocity < this.config.DROP_VELOCITY
          ) {
            this.jumpVelocity = this.config.DROP_VELOCITY;
          }
        },
        /**
         * Update frame for a jump.
         * @param {number} deltaTime
         */
        updateJump: function (deltaTime) {
          var msPerFrame = Trex.animFrames[this.status].msPerFrame;
          var framesElapsed = deltaTime / msPerFrame;
          // Speed drop makes Trex fall faster.
          if (this.speedDrop) {
            this.yPos += Math.round(
              this.jumpVelocity *
                this.config.SPEED_DROP_COEFFICIENT *
                framesElapsed
            );
          } else {
            this.yPos += Math.round(this.jumpVelocity * framesElapsed);
          }
          this.jumpVelocity += this.config.GRAVITY * framesElapsed;
          // Minimum height has been reached.
          if (this.yPos < this.minJumpHeight || this.speedDrop) {
            this.reachedMinHeight = true;
          }
          // Reached max height
          if (this.yPos < this.config.MAX_JUMP_HEIGHT || this.speedDrop) {
            this.endJump();
          }
          // Back down at ground level. Jump completed.
          if (this.yPos > this.groundYPos) {
            this.reset();
            this.jumpCount++;
          }
          this.update(deltaTime);
        },
        /**
         * Set the speed drop. Immediately cancels the current jump.
         */
        setSpeedDrop: function () {
          this.speedDrop = true;
          this.jumpVelocity = 1;
        },
        /**
         * Reset the t-rex to running at start of game.
         */
        reset: function () {
          this.yPos = this.groundYPos;
          this.jumpVelocity = 0;
          this.jumping = false;
          this.update(0, Trex.status.RUNNING);
          this.midair = false;
          this.speedDrop = false;
          this.jumpCount = 0;
        },
      };
      //******************************************************************************
      /**
       * Handles displaying the distance meter.
       * @param {!HTMLCanvasElement} canvas
       * @param {!HTMLImage} spriteSheet Image sprite.
       * @param {number} canvasWidth
       * @constructor
       */
      function DistanceMeter(canvas, spriteSheet, canvasWidth) {
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext("2d");
        this.image = spriteSheet;
        this.x = 0;
        this.y = 5;
        this.currentDistance = 0;
        this.maxScore = 0;
        this.highScore = 0;
        this.container = null;
        this.digits = [];
        this.acheivement = false;
        this.defaultString = "";
        this.flashTimer = 0;
        this.flashIterations = 0;
        this.config = DistanceMeter.config;
        this.init(canvasWidth);
      }
      /**
       * @enum {number}
       */
      DistanceMeter.dimensions = {
        WIDTH: 10,
        HEIGHT: 13,
        DEST_WIDTH: 11,
      };
      /**
       * Y positioning of the digits in the sprite sheet.
       * X position is always 0.
       * @type {array.<number>}
       */
      DistanceMeter.yPos = [0, 13, 27, 40, 53, 67, 80, 93, 107, 120];
      /**
       * Distance meter config.
       * @enum {number}
       */
      DistanceMeter.config = {
        // Number of digits.
        MAX_DISTANCE_UNITS: 5,
        // Distance that causes achievement animation.
        ACHIEVEMENT_DISTANCE: 100,
        // Used for conversion from pixel distance to a scaled unit.
        COEFFICIENT: 0.025,
        // Flash duration in milliseconds.
        FLASH_DURATION: 1000 / 4,
        // Flash iterations for achievement animation.
        FLASH_ITERATIONS: 3,
      };
      DistanceMeter.prototype = {
        /**
         * Initialise the distance meter to '00000'.
         * @param {number} width Canvas width in px.
         */
        init: function (width) {
          var maxDistanceStr = "";
          this.calcXPos(width);
          this.maxScore = this.config.MAX_DISTANCE_UNITS;
          for (var i = 0; i < this.config.MAX_DISTANCE_UNITS; i++) {
            this.draw(i, 0);
            this.defaultString += "0";
            maxDistanceStr += "9";
          }
          this.maxScore = parseInt(maxDistanceStr);
        },
        /**
         * Calculate the xPos in the canvas.
         * @param {number} canvasWidth
         */
        calcXPos: function (canvasWidth) {
          this.x =
            canvasWidth -
            DistanceMeter.dimensions.DEST_WIDTH *
              (this.config.MAX_DISTANCE_UNITS + 1);
        },
        /**
         * Draw a digit to canvas.
         * @param {number} digitPos Position of the digit.
         * @param {number} value Digit value 0-9.
         * @param {boolean} opt_highScore Whether drawing the high score.
         */
        draw: function (digitPos, value, opt_highScore) {
          var sourceWidth = DistanceMeter.dimensions.WIDTH;
          var sourceHeight = DistanceMeter.dimensions.HEIGHT;
          var sourceX = DistanceMeter.dimensions.WIDTH * value;
          var targetX = digitPos * DistanceMeter.dimensions.DEST_WIDTH;
          var targetY = this.y;
          var targetWidth = DistanceMeter.dimensions.WIDTH;
          var targetHeight = DistanceMeter.dimensions.HEIGHT;
          // For high DPI we 2x source values.
          if (IS_HIDPI) {
            sourceWidth *= 2;
            sourceHeight *= 2;
            sourceX *= 2;
          }
          this.canvasCtx.save();
          if (opt_highScore) {
            // Left of the current score.
            var highScoreX =
              this.x -
              this.config.MAX_DISTANCE_UNITS *
                2 *
                DistanceMeter.dimensions.WIDTH;
            this.canvasCtx.translate(highScoreX, this.y);
          } else {
            this.canvasCtx.translate(this.x, this.y);
          }
          this.canvasCtx.drawImage(
            this.image,
            sourceX,
            0,
            sourceWidth,
            sourceHeight,
            targetX,
            targetY,
            targetWidth,
            targetHeight
          );
          this.canvasCtx.restore();
        },
        /**
         * Covert pixel distance to a 'real' distance.
         * @param {number} distance Pixel distance ran.
         * @return {number} The 'real' distance ran.
         */
        getActualDistance: function (distance) {
          return distance ? Math.round(distance * this.config.COEFFICIENT) : 0;
        },
        /**
         * Update the distance meter.
         * @param {number} deltaTime
         * @param {number} distance
         * @return {boolean} Whether the acheivement sound fx should be played.
         */
        update: function (deltaTime, distance) {
          var paint = true;
          var playSound = false;
          if (!this.acheivement) {
            distance = this.getActualDistance(distance);
            if (distance > 0) {
              // Acheivement unlocked
              if (distance % this.config.ACHIEVEMENT_DISTANCE == 0) {
                // Flash score and play sound.
                this.acheivement = true;
                this.flashTimer = 0;
                playSound = true;
              }
              // Create a string representation of the distance with leading 0.
              var distanceStr = (this.defaultString + distance).substr(
                -this.config.MAX_DISTANCE_UNITS
              );
              this.digits = distanceStr.split("");
            } else {
              this.digits = this.defaultString.split("");
            }
          } else {
            // Control flashing of the score on reaching acheivement.
            if (this.flashIterations <= this.config.FLASH_ITERATIONS) {
              this.flashTimer += deltaTime;
              if (this.flashTimer < this.config.FLASH_DURATION) {
                paint = false;
              } else if (this.flashTimer > this.config.FLASH_DURATION * 2) {
                this.flashTimer = 0;
                this.flashIterations++;
              }
            } else {
              this.acheivement = false;
              this.flashIterations = 0;
              this.flashTimer = 0;
            }
          }
          // Draw the digits if not flashing.
          if (paint) {
            for (var i = this.digits.length - 1; i >= 0; i--) {
              this.draw(i, parseInt(this.digits[i]));
            }
          }
          this.drawHighScore();
          return playSound;
        },
        /**
         * Draw the high score.
         */
        drawHighScore: function () {
          this.canvasCtx.save();
          this.canvasCtx.globalAlpha = 0.8;
          for (var i = this.highScore.length - 1; i >= 0; i--) {
            this.draw(i, parseInt(this.highScore[i], 10), true);
          }
          this.canvasCtx.restore();
        },
        /**
         * Set the highscore as a array string.
         * Position of char in the sprite: H - 10, I - 11.
         * @param {number} distance Distance ran in pixels.
         */
        setHighScore: function (distance) {
          distance = this.getActualDistance(distance);
          var highScoreStr = (this.defaultString + distance).substr(
            -this.config.MAX_DISTANCE_UNITS
          );
          this.highScore = ["10", "11", ""].concat(highScoreStr.split(""));
        },
        /**
         * Reset the distance meter back to '00000'.
         */
        reset: function () {
          this.update(0);
          this.acheivement = false;
        },
      };
      //******************************************************************************
      /**
       * Cloud background item.
       * Similar to an obstacle object but without collision boxes.
       * @param {HTMLCanvasElement} canvas Canvas element.
       * @param {Image} cloudImg
       * @param {number} containerWidth
       */
      function Cloud(canvas, cloudImg, containerWidth) {
        this.canvas = canvas;
        this.canvasCtx = this.canvas.getContext("2d");
        this.image = cloudImg;
        this.containerWidth = containerWidth;
        this.xPos = containerWidth;
        this.yPos = 0;
        this.remove = false;
        this.cloudGap = getRandomNum(
          Cloud.config.MIN_CLOUD_GAP,
          Cloud.config.MAX_CLOUD_GAP
        );
        this.init();
      }
      /**
       * Cloud object config.
       * @enum {number}
       */
      Cloud.config = {
        HEIGHT: 14,
        MAX_CLOUD_GAP: 400,
        MAX_SKY_LEVEL: 30,
        MIN_CLOUD_GAP: 100,
        MIN_SKY_LEVEL: 71,
        WIDTH: 46,
      };
      Cloud.prototype = {
        /**
         * Initialise the cloud. Sets the Cloud height.
         */
        init: function () {
          this.yPos = getRandomNum(
            Cloud.config.MAX_SKY_LEVEL,
            Cloud.config.MIN_SKY_LEVEL
          );
          this.draw();
        },
        /**
         * Draw the cloud.
         */
        draw: function () {
          this.canvasCtx.save();
          var sourceWidth = Cloud.config.WIDTH;
          var sourceHeight = Cloud.config.HEIGHT;
          if (IS_HIDPI) {
            sourceWidth = sourceWidth * 2;
            sourceHeight = sourceHeight * 2;
          }
          this.canvasCtx.drawImage(
            this.image,
            0,
            0,
            sourceWidth,
            sourceHeight,
            this.xPos,
            this.yPos,
            Cloud.config.WIDTH,
            Cloud.config.HEIGHT
          );
          this.canvasCtx.restore();
        },
        /**
         * Update the cloud position.
         * @param {number} speed
         */
        update: function (speed) {
          if (!this.remove) {
            this.xPos -= Math.ceil(speed);
            this.draw();
            // Mark as removeable if no longer in the canvas.
            if (!this.isVisible()) {
              this.remove = true;
            }
          }
        },
        /**
         * Check if the cloud is visible on the stage.
         * @return {boolean}
         */
        isVisible: function () {
          return this.xPos + Cloud.config.WIDTH > 0;
        },
      };
      //******************************************************************************
      /**
       * Horizon Line.
       * Consists of two connecting lines. Randomly assigns a flat / bumpy horizon.
       * @param {HTMLCanvasElement} canvas
       * @param {HTMLImage} bgImg Horizon line sprite.
       * @constructor
       */
      function HorizonLine(canvas, bgImg) {
        this.image = bgImg;
        this.canvas = canvas;
        this.canvasCtx = canvas.getContext("2d");
        this.sourceDimensions = {};
        this.dimensions = HorizonLine.dimensions;
        this.sourceXPos = [0, this.dimensions.WIDTH];
        this.xPos = [];
        this.yPos = 0;
        this.bumpThreshold = 0.5;
        this.setSourceDimensions();
        this.draw();
      }
      /**
       * Horizon line dimensions.
       * @enum {number}
       */
      HorizonLine.dimensions = {
        WIDTH: 600,
        HEIGHT: 12,
        YPOS: 127,
      };
      HorizonLine.prototype = {
        /**
         * Set the source dimensions of the horizon line.
         */
        setSourceDimensions: function () {
          for (var dimension in HorizonLine.dimensions) {
            if (IS_HIDPI) {
              if (dimension != "YPOS") {
                this.sourceDimensions[dimension] =
                  HorizonLine.dimensions[dimension] * 2;
              }
            } else {
              this.sourceDimensions[dimension] =
                HorizonLine.dimensions[dimension];
            }
            this.dimensions[dimension] = HorizonLine.dimensions[dimension];
          }
          this.xPos = [0, HorizonLine.dimensions.WIDTH];
          this.yPos = HorizonLine.dimensions.YPOS;
        },
        /**
         * Return the crop x position of a type.
         */
        getRandomType: function () {
          return Math.random() > this.bumpThreshold ? this.dimensions.WIDTH : 0;
        },
        /**
         * Draw the horizon line.
         */
        draw: function () {
          this.canvasCtx.drawImage(
            this.image,
            this.sourceXPos[0],
            0,
            this.sourceDimensions.WIDTH,
            this.sourceDimensions.HEIGHT,
            this.xPos[0],
            this.yPos,
            this.dimensions.WIDTH,
            this.dimensions.HEIGHT
          );
          this.canvasCtx.drawImage(
            this.image,
            this.sourceXPos[1],
            0,
            this.sourceDimensions.WIDTH,
            this.sourceDimensions.HEIGHT,
            this.xPos[1],
            this.yPos,
            this.dimensions.WIDTH,
            this.dimensions.HEIGHT
          );
        },
        /**
         * Update the x position of an indivdual piece of the line.
         * @param {number} pos Line position.
         * @param {number} increment
         */
        updateXPos: function (pos, increment) {
          var line1 = pos;
          var line2 = pos == 0 ? 1 : 0;
          this.xPos[line1] -= increment;
          this.xPos[line2] = this.xPos[line1] + this.dimensions.WIDTH;
          if (this.xPos[line1] <= -this.dimensions.WIDTH) {
            this.xPos[line1] += this.dimensions.WIDTH * 2;
            this.xPos[line2] = this.xPos[line1] - this.dimensions.WIDTH;
            this.sourceXPos[line1] = this.getRandomType();
          }
        },
        /**
         * Update the horizon line.
         * @param {number} deltaTime
         * @param {number} speed
         */
        update: function (deltaTime, speed) {
          var increment = Math.floor(speed * (FPS / 1000) * deltaTime);
          if (this.xPos[0] <= 0) {
            this.updateXPos(0, increment);
          } else {
            this.updateXPos(1, increment);
          }
          this.draw();
        },
        /**
         * Reset horizon to the starting position.
         */
        reset: function () {
          this.xPos[0] = 0;
          this.xPos[1] = HorizonLine.dimensions.WIDTH;
        },
      };
      //******************************************************************************
      /**
       * Horizon background class.
       * @param {HTMLCanvasElement} canvas
       * @param {Array.<HTMLImageElement>} images
       * @param {object} dimensions Canvas dimensions.
       * @param {number} gapCoefficient
       * @constructor
       */
      function Horizon(canvas, images, dimensions, gapCoefficient) {
        this.canvas = canvas;
        this.canvasCtx = this.canvas.getContext("2d");
        this.config = Horizon.config;
        this.dimensions = dimensions;
        this.gapCoefficient = gapCoefficient;
        this.obstacles = [];
        this.horizonOffsets = [0, 0];
        this.cloudFrequency = this.config.CLOUD_FREQUENCY;
        // Cloud
        this.clouds = [];
        this.cloudImg = images.CLOUD;
        this.cloudSpeed = this.config.BG_CLOUD_SPEED;
        // Horizon
        this.horizonImg = images.HORIZON;
        this.horizonLine = null;
        // Obstacles
        this.obstacleImgs = {
          CACTUS_SMALL: images.CACTUS_SMALL,
          CACTUS_LARGE: images.CACTUS_LARGE,
        };
        this.init();
      }
      /**
       * Horizon config.
       * @enum {number}
       */
      Horizon.config = {
        BG_CLOUD_SPEED: 0.2,
        BUMPY_THRESHOLD: 0.3,
        CLOUD_FREQUENCY: 0.5,
        HORIZON_HEIGHT: 16,
        MAX_CLOUDS: 6,
      };
      Horizon.prototype = {
        /**
         * Initialise the horizon. Just add the line and a cloud. No obstacles.
         */
        init: function () {
          this.addCloud();
          this.horizonLine = new HorizonLine(this.canvas, this.horizonImg);
        },
        /**
         * @param {number} deltaTime
         * @param {number} currentSpeed
         * @param {boolean} updateObstacles Used as an override to prevent
         * the obstacles from being updated / added. This happens in the
         * ease in section.
         */
        update: function (deltaTime, currentSpeed, updateObstacles) {
          this.runningTime += deltaTime;
          this.horizonLine.update(deltaTime, currentSpeed);
          this.updateClouds(deltaTime, currentSpeed);
          if (updateObstacles) {
            this.updateObstacles(deltaTime, currentSpeed);
          }
        },
        /**
         * Update the cloud positions.
         * @param {number} deltaTime
         * @param {number} currentSpeed
         */
        updateClouds: function (deltaTime, speed) {
          var cloudSpeed = (this.cloudSpeed / 1000) * deltaTime * speed;
          var numClouds = this.clouds.length;
          if (numClouds) {
            for (var i = numClouds - 1; i >= 0; i--) {
              this.clouds[i].update(cloudSpeed);
            }
            var lastCloud = this.clouds[numClouds - 1];
            // Check for adding a new cloud.
            if (
              numClouds < this.config.MAX_CLOUDS &&
              this.dimensions.WIDTH - lastCloud.xPos > lastCloud.cloudGap &&
              this.cloudFrequency > Math.random()
            ) {
              this.addCloud();
            }
            // Remove expired clouds.
            this.clouds = this.clouds.filter(function (obj) {
              return !obj.remove;
            });
          }
        },
        /**
         * Update the obstacle positions.
         * @param {number} deltaTime
         * @param {number} currentSpeed
         */
        updateObstacles: function (deltaTime, currentSpeed) {
          // Obstacles, move to Horizon layer.
          var updatedObstacles = this.obstacles.slice(0);
          for (var i = 0; i < this.obstacles.length; i++) {
            var obstacle = this.obstacles[i];
            obstacle.update(deltaTime, currentSpeed);
            // Clean up existing obstacles.
            if (obstacle.remove) {
              updatedObstacles.shift();
            }
          }
          this.obstacles = updatedObstacles;
          if (this.obstacles.length > 0) {
            var lastObstacle = this.obstacles[this.obstacles.length - 1];
            if (
              lastObstacle &&
              !lastObstacle.followingObstacleCreated &&
              lastObstacle.isVisible() &&
              lastObstacle.xPos + lastObstacle.width + lastObstacle.gap <
                this.dimensions.WIDTH
            ) {
              this.addNewObstacle(currentSpeed);
              lastObstacle.followingObstacleCreated = true;
            }
          } else {
            // Create new obstacles.
            this.addNewObstacle(currentSpeed);
          }
        },
        /**
         * Add a new obstacle.
         * @param {number} currentSpeed
         */
        addNewObstacle: function (currentSpeed) {
          var obstacleTypeIndex = getRandomNum(0, Obstacle.types.length - 1);
          var obstacleType = Obstacle.types[obstacleTypeIndex];
          var obstacleImg = this.obstacleImgs[obstacleType.type];
          this.obstacles.push(
            new Obstacle(
              this.canvasCtx,
              obstacleType,
              obstacleImg,
              this.dimensions,
              this.gapCoefficient,
              currentSpeed
            )
          );
        },
        /**
         * Reset the horizon layer.
         * Remove existing obstacles and reposition the horizon line.
         */
        reset: function () {
          this.obstacles = [];
          this.horizonLine.reset();
        },
        /**
         * Update the canvas width and scaling.
         * @param {number} width Canvas width.
         * @param {number} height Canvas height.
         */
        resize: function (width, height) {
          this.canvas.width = width;
          this.canvas.height = height;
        },
        /**
         * Add a new cloud to the horizon.
         */
        addCloud: function () {
          this.clouds.push(
            new Cloud(this.canvas, this.cloudImg, this.dimensions.WIDTH)
          );
        },
      };
    })(props);

    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
      new Runner(".interstitial-wrapper");
    } else {
      document.getElementById("main-frame-notchrome").style.display = "";
    }
  };

  interface CharacterSpriteProps {
    size: "1x" | "2x";
    spriteName: string;
  }

  const CharacterSprite: React.FC<CharacterSpriteProps> = ({
    size,
    spriteName,
  }) => {
    const dimensions = {
      "1x": dimension1x.x1,
      "2x": dimension2x.x2,
    };

    const { height, width, id } = dimensions[size][spriteName];
    console.log({ height, width, id });

    return customizeAssets[spriteName] ? (
      <Image
        id={id}
        src={
          customizeAssets[`${spriteName}${size === "2x" ? "2x" : ""}`]
            .base64Sprite || base64Images[id]
        }
        // alt={customizeAssets[spriteName].alt || "capybara"}
        height={height}
        width={width}
        loading={""}
      />
    ) : (
      <img id={id} src={base64Images[id]} jstcache="0" />
    );
  };

  return (
    <div
      id="it-works"
      style="background: #fef6ce;   display: flex;
    place-items: center;
    height: 100vh;">
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"></link> */}
      {/* <style>{`*{
      font-family: Press Start 2P, Inter, system-ui;
  
  }`}</style> */}
      <div
        style={{
          position: "fixed",
          width: 3000,
          zIndex: 0,
          opacity: 0.2,
        }}
        dangerouslySetInnerHTML={{
          __html: backgroundSvg,
        }}
      />
      <div
        style={{ zIndex: 1, position: "relative", height: "fit-content" }}
        class="container py-10 flex flex-col h-screen w-full items-center justify-center gap-16">
        <div
          class="leading-10 text-6xl"
          style="line-height: 5rem;text-align: center;
    font-size: 40px;"
          dangerouslySetInnerHTML={{
            __html: heading,
          }}
        />{" "}
        {/* <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="1080" fill="#df6688"></rect>
        <path
          d="M 0,1080 C 0,1080 0,90 0,90 C 43.01128058377451,83.07235861868149 86.02256116754901,76.14471723736298 132,75 C 177.97743883245099,73.85528276263702 226.92103591357846,78.4934896692296 274,77 C 321.07896408642154,75.5065103307704 366.2932951781371,67.88132408571866 404,64 C 441.7067048218629,60.11867591428135 471.9057833738732,59.98121398789577 506,61 C 540.0942166261268,62.01878601210423 578.0835713263701,64.19381996269829 629,77 C 679.9164286736299,89.80618003730171 743.7599313206467,113.24350616131113 789,116 C 834.2400686793533,118.75649383868887 860.8767033910432,100.83215539205719 904,95 C 947.1232966089568,89.16784460794281 1006.7332551151808,95.42787227046009 1042,106 C 1077.2667448848192,116.57212772953991 1088.190276148233,131.4563555261024 1132,122 C 1175.809723851767,112.54364447389759 1252.5056402918872,78.7467056251302 1300,61 C 1347.4943597081128,43.25329437486979 1365.7871626842182,41.556821973376714 1399,59 C 1432.2128373157818,76.44317802662329 1480.3457089712406,113.02600648136294 1533,115 C 1585.6542910287594,116.97399351863706 1642.8300014308197,84.3391521011715 1681,78 C 1719.1699985691803,71.6608478988285 1738.33428530548,91.61738511395099 1775,98 C 1811.66571469452,104.38261488604901 1865.83285734726,97.1913074430245 1920,90 C 1920,90 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.049999999999999996"></path>
        <path
          d="M 0,1080 C 0,1080 0,180 0,180 C 33.04207029364669,172.9345142640417 66.08414058729338,165.86902852808342 108,169 C 149.91585941270662,172.13097147191658 200.7055079444732,185.458400151708 244,180 C 287.2944920555268,174.541599848292 323.09382763481375,150.29737086508462 368,159 C 412.90617236518625,167.70262913491538 466.9191815162719,209.3521163879535 515,213 C 563.0808184837281,216.6478836120465 605.2294463000984,182.29416358310155 650,181 C 694.7705536999016,179.70583641689845 742.1630332833345,211.4712292796404 782,213 C 821.8369667166655,214.5287707203596 854.1184205665636,185.82091929833692 898,169 C 941.8815794334364,152.17908070166308 997.3632844504111,147.24509352701205 1034,157 C 1070.6367155495889,166.75490647298795 1088.4284416317919,191.198706593615 1130,193 C 1171.5715583682081,194.801293406385 1236.9229490224213,173.960080098528 1289,174 C 1341.0770509775787,174.039919901472 1379.8797622785223,194.9609730122729 1415,197 C 1450.1202377214777,199.0390269877271 1481.558001863489,182.1960278523805 1526,167 C 1570.441998136511,151.8039721476195 1627.888230267522,138.25491557820527 1670,148 C 1712.111769732478,157.74508442179473 1738.889077066422,190.78430983479848 1778,200 C 1817.110922933578,209.21569016520152 1868.555461466789,194.60784508260076 1920,180 C 1920,180 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.09999999999999999"></path>
        <path
          d="M 0,1080 C 0,1080 0,270 0,270 C 40.468814667295575,278.7763820795632 80.93762933459115,287.5527641591263 123,283 C 165.06237066540885,278.4472358408737 208.71829732893093,260.5653254430578 256,265 C 303.28170267106907,269.4346745569422 354.18918134968527,296.18593406864244 401,291 C 447.81081865031473,285.81406593135756 490.524977272328,248.69093828237266 528,244 C 565.475022727672,239.30906171762734 597.710909561003,267.05031280186705 634,282 C 670.289090438997,296.94968719813295 710.6313844836601,299.1078105101592 760,289 C 809.3686155163399,278.8921894898408 867.763552504357,256.51844515749633 913,259 C 958.236447495643,261.48155484250367 990.3144054989123,288.8184088598556 1028,302 C 1065.6855945010877,315.1815911401444 1108.978825499994,314.2079194030811 1155,299 C 1201.021174500006,283.7920805969189 1249.770292501112,254.34991352781987 1288,255 C 1326.229707498888,255.65008647218013 1353.9400044955585,286.3924264856395 1397,283 C 1440.0599955044415,279.6075735143605 1498.4696895166546,242.0803805296224 1550,242 C 1601.5303104833454,241.9196194703776 1646.1812374378237,279.2860513958709 1680,282 C 1713.8187625621763,284.7139486041291 1736.8053607320503,252.775413886894 1775,245 C 1813.1946392679497,237.224586113106 1866.5973196339748,253.612293056553 1920,270 C 1920,270 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.15"></path>
        <path
          d="M 0,1080 C 0,1080 0,360 0,360 C 37.43318559148426,345.2295054132685 74.86637118296852,330.45901082653694 113,332 C 151.13362881703148,333.54098917346306 189.96770085961015,351.39346210712074 236,365 C 282.03229914038985,378.60653789287926 335.262825378591,387.9671407449802 388,382 C 440.737174621409,376.0328592550198 492.98099762602567,354.73797491295846 529,346 C 565.0190023739743,337.26202508704154 584.8131841173062,341.080959603186 626,338 C 667.1868158826938,334.919040396814 729.7662659047495,324.9381866742977 784,330 C 838.2337340952505,335.0618133257023 884.1217522636963,355.1662936996232 919,358 C 953.8782477363037,360.8337063003768 977.7467250404659,346.3966385272094 1013,345 C 1048.253274959534,343.6033614727906 1094.8913475744407,355.2471521915391 1143,370 C 1191.1086524255593,384.7528478084609 1240.687884661771,402.61475270663425 1285,392 C 1329.312115338229,381.38524729336575 1368.3571137784759,342.293836981924 1413,337 C 1457.6428862215241,331.706163018076 1507.883660224326,360.20989936566986 1555,362 C 1602.116339775674,363.79010063433014 1646.1082453242202,338.8665655553966 1687,343 C 1727.8917546757798,347.1334344446034 1765.683358478794,380.32383841274384 1804,388 C 1842.316641521206,395.67616158725616 1881.1583207606031,377.8380807936281 1920,360 C 1920,360 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.19999999999999998"></path>
        <path
          d="M 0,1080 C 0,1080 0,450 0,450 C 44.21387743738566,446.08152290350085 88.42775487477132,442.16304580700177 135,449 C 181.57224512522868,455.83695419299823 230.5028579383004,473.42933967549374 274,468 C 317.4971420616996,462.57066032450626 355.56081337202716,434.11959549102335 395,429 C 434.43918662797284,423.88040450897665 475.2538885735912,442.09227836041276 519,454 C 562.7461114264088,465.90772163958724 609.4236323336079,471.5112910673255 651,473 C 692.5763676663921,474.4887089326745 729.0515820919773,471.86255737028546 766,463 C 802.9484179080227,454.13744262971454 840.3700392984828,439.03847945153274 889,441 C 937.6299607015172,442.96152054846726 997.468260714091,461.9835248235836 1046,460 C 1094.531739285909,458.0164751764164 1131.7569178451533,435.02742125413295 1164,439 C 1196.2430821548467,442.97257874586705 1223.5040679052954,473.9067901598844 1264,479 C 1304.4959320947046,484.0932098401156 1358.2268105336639,463.34541810632925 1400,453 C 1441.7731894663361,442.65458189367075 1471.588689960049,442.71153741479833 1519,450 C 1566.411310039951,457.28846258520167 1631.418429626141,471.8084322344774 1676,470 C 1720.581570373859,468.1915677655226 1744.7375915353882,450.05473364729215 1782,444 C 1819.2624084646118,437.94526635270785 1869.631204232306,443.97263317635395 1920,450 C 1920,450 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.24999999999999997"></path>
        <path
          d="M 0,1080 C 0,1080 0,540 0,540 C 55.249226008608204,547.8673798402274 110.49845201721641,555.7347596804548 149,558 C 187.5015479827836,560.2652403195452 209.25541793974259,556.9283411184082 250,552 C 290.7445820602574,547.0716588815918 350.47987622381316,540.5518758459124 391,547 C 431.52012377618684,553.4481241540876 452.8250771650049,572.8641554979424 489,564 C 525.1749228349951,555.1358445020576 576.2198151161668,517.991502162318 623,519 C 669.7801848838332,520.008497837682 712.2956623703278,559.1698358527857 764,556 C 815.7043376296722,552.8301641472143 876.5975354025223,507.32915442653905 917,510 C 957.4024645974777,512.670845573461 977.3141960195824,563.5135464410581 1017,570 C 1056.6858039804176,576.4864535589419 1116.1456805191478,538.6166598092286 1164,529 C 1211.8543194808522,519.3833401907714 1248.1030819038256,538.0198143220274 1287,550 C 1325.8969180961744,561.9801856779726 1367.4419918655497,567.3040829026612 1413,568 C 1458.5580081344503,568.6959170973388 1508.1289506339765,564.7638540673279 1552,555 C 1595.8710493660235,545.2361459326721 1634.042205598545,529.6405008280271 1676,523 C 1717.957794401455,516.3594991719729 1763.702226971844,518.6741426205637 1805,523 C 1846.297773028156,527.3258573794363 1883.148886514078,533.6629286897182 1920,540 C 1920,540 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.3"></path>
        <path
          d="M 0,1080 C 0,1080 0,630 0,630 C 35.598321992887904,643.611954881024 71.19664398577581,657.2239097620479 110,659 C 148.8033560142242,660.7760902379521 190.81174604978474,650.716315832832 236,642 C 281.18825395021526,633.283684167168 329.55637181508524,625.9108269066244 376,618 C 422.44362818491476,610.0891730933756 466.9627666898747,601.6403765406702 512,601 C 557.0372333101253,600.3596234593298 602.5925614254161,607.5276669306951 638,612 C 673.4074385745839,616.4723330693049 698.666987608461,618.2489557365492 749,628 C 799.333012391539,637.7510442634508 874.7394881407398,655.4765101231077 915,658 C 955.2605118592602,660.5234898768923 960.3750598285801,647.8450037710205 1004,639 C 1047.62494017142,630.1549962289795 1129.76027254494,625.1434747928107 1174,616 C 1218.23972745506,606.8565252071893 1224.5838499916595,593.5810970577368 1263,598 C 1301.4161500083405,602.4189029422632 1371.904327488423,624.5321369762418 1420,641 C 1468.095672511577,657.4678630237582 1493.7988400546494,668.290355037296 1533,661 C 1572.2011599453506,653.709644962704 1624.900312292979,628.3064428745741 1666,629 C 1707.099687707021,629.6935571254259 1736.5999107734347,656.4838734644072 1777,661 C 1817.4000892265653,665.5161265355928 1868.7000446132827,647.7580632677964 1920,630 C 1920,630 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.35"></path>
        <path
          d="M 0,1080 C 0,1080 0,720 0,720 C 33.38048866491728,722.0119787234576 66.76097732983456,724.0239574469152 115,721 C 163.23902267016544,717.9760425530848 226.33657934557903,709.9161489357964 275,708 C 323.663420654421,706.0838510642036 357.8927052878493,710.3114468098992 394,716 C 430.1072947121507,721.6885531901008 468.09259950302396,728.8380638246067 504,729 C 539.907400496976,729.1619361753933 573.7368967000547,722.3362978916743 618,718 C 662.2631032999453,713.6637021083257 716.959813696757,711.8167446086959 767,711 C 817.040186303243,710.1832553913041 862.4238485129171,710.3967236735422 908,718 C 953.5761514870829,725.6032763264578 999.3447922515743,740.5963606971357 1041,745 C 1082.6552077484257,749.4036393028643 1120.196982480786,743.2178335379156 1164,738 C 1207.803017519214,732.7821664620844 1257.8672778252817,728.5323051512025 1292,731 C 1326.1327221747183,733.4676948487975 1344.3339062180873,742.6529458572745 1389,745 C 1433.6660937819127,747.3470541427255 1504.7970973023682,742.8559114196996 1552,741 C 1599.2029026976318,739.1440885803004 1622.4777045724393,739.9234084639271 1663,734 C 1703.5222954275607,728.0765915360729 1761.2920844078744,715.4504547245922 1807,712 C 1852.7079155921256,708.5495452754078 1886.3539577960628,714.2747726377039 1920,720 C 1920,720 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.39999999999999997"></path>
        <path
          d="M 0,1080 C 0,1080 0,810 0,810 C 29.731921518047372,821.948638961704 59.463843036094744,833.897277923408 109,832 C 158.53615696390526,830.102722076592 227.87654937366835,814.359527268072 272,799 C 316.12345062633165,783.640472731928 335.029959469232,768.6646130043041 376,776 C 416.970040530768,783.3353869956959 480.0036127494037,812.9820207147117 524,814 C 567.9963872505963,815.0179792852883 592.9555895331533,787.4073041368493 628,780 C 663.0444104668467,772.5926958631507 708.1740291179829,785.3887627378908 761,789 C 813.8259708820171,792.6112372621092 874.3482939949153,787.037644911587 918,789 C 961.6517060050847,790.962355088413 988.4327949023561,800.4606576157612 1027,807 C 1065.5672050976439,813.5393423842388 1115.9205263956599,817.1197246253682 1156,822 C 1196.0794736043401,826.8802753746318 1225.8850995150044,833.0604438827659 1272,827 C 1318.1149004849956,820.9395561172341 1380.539075544322,802.6384998435683 1422,798 C 1463.460924455678,793.3615001564317 1483.9585983077075,802.3855567429611 1528,804 C 1572.0414016922925,805.6144432570389 1639.6265312248483,799.8192731845875 1685,794 C 1730.3734687751517,788.1807268154125 1753.5352767929003,782.3373505186893 1789,785 C 1824.4647232070997,787.6626494813107 1872.2323616035499,798.8313247406554 1920,810 C 1920,810 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.44999999999999996"></path>
        <path
          d="M 0,1080 C 0,1080 0,900 0,900 C 32.479010155626185,903.5766587138642 64.95802031125237,907.1533174277282 115,910 C 165.04197968874763,912.8466825722718 232.64692891061668,914.9633890029514 274,916 C 315.3530710893833,917.0366109970486 330.45426404628097,916.9931265604665 363,916 C 395.54573595371903,915.0068734395335 445.53601490425956,913.0641047551825 496,903 C 546.4639850957404,892.9358952448175 597.4016763366812,874.7504544188031 637,877 C 676.5983236633188,879.2495455811969 704.8572797490154,901.934077569605 749,903 C 793.1427202509846,904.065922430395 853.1692046672568,883.513235302776 896,889 C 938.8307953327432,894.486764697224 964.4659015819575,926.0129812192911 1010,931 C 1055.5340984180425,935.9870187807089 1120.967189004914,914.434839820059 1169,908 C 1217.032810995086,901.565160179941 1247.6653423983873,910.2476595004725 1289,913 C 1330.3346576016127,915.7523404995275 1382.3714414015371,912.5745221780503 1422,912 C 1461.6285585984629,911.4254778219497 1488.8488919954646,913.4542517873266 1524,907 C 1559.1511080045354,900.5457482126734 1602.2329906166055,885.6084706726429 1653,877 C 1703.7670093833945,868.3915293273571 1762.2191455381128,866.111865522102 1808,871 C 1853.7808544618872,875.888134477898 1886.8904272309437,887.944067238949 1920,900 C 1920,900 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.49999999999999994"></path>
        <path
          d="M 0,1080 C 0,1080 0,990 0,990 C 37.701111635212584,994.0210956794033 75.40222327042517,998.0421913588065 116,990 C 156.59777672957483,981.9578086411935 200.09221855351188,961.8523302441773 249,966 C 297.9077814464881,970.1476697558227 352.22890251552735,998.5484876644842 401,995 C 449.77109748447265,991.4515123355158 492.9921713843786,955.9537190978854 534,962 C 575.0078286156214,968.0462809021146 613.8024119469578,1015.636635943975 653,1017 C 692.1975880530422,1018.363364056025 731.7981808277898,973.4997371262155 777,964 C 822.2018191722102,954.5002628737845 873.0048647418831,980.3644155511633 909,994 C 944.9951352581169,1007.6355844488367 966.1823602046779,1009.0426006691308 1004,1008 C 1041.817639795322,1006.9573993308692 1096.2656944394048,1003.4651817723135 1141,1004 C 1185.7343055605952,1004.5348182276865 1220.754862037702,1009.0966722416156 1264,1002 C 1307.245137962298,994.9033277583844 1358.714857409787,976.1481292612245 1401,971 C 1443.285142590213,965.8518707387755 1476.38570832315,974.3108107134863 1519,987 C 1561.61429167685,999.6891892865137 1613.7423092976135,1016.6086278848304 1657,1021 C 1700.2576907023865,1025.3913721151696 1734.645054486396,1017.2546777471912 1777,1010 C 1819.354945513604,1002.7453222528088 1869.677472756802,996.3726611264044 1920,990 C 1920,990 1920,1080 1920,1080 Z"
          fill="#3d1053"
          opacity="0.5499999999999999"></path>
      </svg> */}
        <div
          class="leading-10 text-6xl"
          style={"width: 96%;text-align: center;"}
          dangerouslySetInnerHTML={{
            __html: subText,
          }}
        />
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: useScript(onLoad, {
              heading,
              instructions,
              subText,
              game: {
                acceleration: 0.001,
                bgCloudSpeed: 0.2,
                bottomPad: 10,
                clearTime: 3000,
                cloudFrequency: 0.5,
                gameoverClearTime: 750,
                gapCoefficient: 0.6,
                gravity: 0.6,
                initialJumpVelocity: 12,
                maxClouds: 6,
                maxObstacleLength: 3,
                maxSpeed: 12,
                minJumpHeight: 35,
                mobileSpeedCoefficient: 1.2,
                resourceTemplateId: "audio-resources",
                speed: 6,
                speedDropCoefficient: 3,
                ...gameProperties,
              },
            }),
          }}
        />
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="flex items-center gap-4">
            {/* <div
            style="width: 96%;text-align: center;"
            class="leading-10 text-6xl">
            <p style="line-height: 1rem; font-size: 1rem;">
              He has been hungry since this time.
            </p>
            <p style="line-height: 2rem; font-size: 1rem;">
              Now help him navigate safely to his home :)
            </p>
          </div> */}
          </div>
          {/* <-- TCapy -->  */}
          <style>{dinoGameStyles}</style>
          <div>
            <div
              id="main-frame-error"
              class="interstitial-wrapper"
              jstcache="0">
              <div
                class="onlyforchrome"
                style="
                margin-top: 5px;
                text-align: center;
                color: #8a8a8a;
                margin-bottom: 80px;
                font-size: 0.8em;
                line-height: 1.2em;
              ">
                {instructions}
              </div>
              <div
                id="main-frame-notchrome"
                style="display: none; margin-top: 50px">
                Sorry, this game only runs on the Google Chrome!
              </div>
              <div id="offline-resources" jstcache="0">
                <div id="offline-resources-1x" jstcache="0">
                  <CharacterSprite size={"1x"} spriteName={"obstacleLarge"} />
                  <CharacterSprite size={"1x"} spriteName={"obstacleSmall"} />
                  <CharacterSprite size={"1x"} spriteName={"gameText"} />
                  <CharacterSprite size={"1x"} spriteName={"cloud"} />
                  <CharacterSprite size={"1x"} spriteName={"horizon"} />
                  <CharacterSprite size={"1x"} spriteName={"characterSprite"} />
                  <CharacterSprite size={"1x"} spriteName={"restart"} />
                </div>
                <div id="offline-resources-2x" jstcache="0">
                  <CharacterSprite size={"2x"} spriteName={"obstacleLarge"} />
                  <CharacterSprite size={"2x"} spriteName={"obstacleSmall"} />
                  <CharacterSprite size={"2x"} spriteName={"gameText"} />
                  <CharacterSprite size={"2x"} spriteName={"cloud"} />
                  <CharacterSprite size={"2x"} spriteName={"horizon"} />
                  <CharacterSprite size={"2x"} spriteName={"characterSprite"} />
                  <CharacterSprite size={"2x"} spriteName={"restart"} />
                </div>
                <template id="audio-resources" jstcache="0">
                  <audio
                    id={imagesID.offlinesoundpress}
                    src={base64Images[imagesID.offlinesoundpress]}></audio>
                  <audio
                    id={imagesID.offlinesoundhit}
                    src={base64Images[imagesID.offlinesoundhit]}></audio>
                  <audio
                    id={imagesID.offlinesoundreached}
                    src={base64Images[imagesID.offlinesoundreached]}></audio>
                </template>
              </div>
            </div>
          </div>
          <div class="text-sm">Powered by HTMX</div>
        </div>
        <style>{`
        .info-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
           border-radius: 16px;
        }

        .hover-text {
          display: none;
          position: absolute;
          background-color:  #4CAF50;
          color: #fff;
          text-align: left;
          border-radius: 12px;
          padding: 25px;
          z-index: 1;
          bottom: 125%; 
          left: 50%;
          margin-left: -352px;
          font-family: Inter;
          line-height: 1.4rem;
          font-size: 14px;
          width: 380px;
        }

        .info-button:hover .hover-text {
          display: block;
        }

        `}</style>
        <button className="btn info-button">
          {/* <FiInfo size={24} /> */}
          <img
            src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11683/4049446a-5efb-4fab-883a-935d922ce2c5"
            alt="info"
            width="24"
            height="24"
          />
          <span
            className="hover-text"
            dangerouslySetInnerHTML={{
              __html: motivationBehindTheProject,
            }}
          />
        </button>
      </div>
    </div>
  );
}
