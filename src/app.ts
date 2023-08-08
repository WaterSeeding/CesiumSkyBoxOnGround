import "./app.css";
import * as dat from "dat.gui";
import { viewer } from "./main";
import Scene from "./Scene/index";
import SkyBoxOnGround from "./SkyBoxOnGround/index";
import Camera from "./Camera/index";

const gui = new dat.GUI({
  name: "Cesium GUI",
  width: 450,
  autoPlace: true,
  closed: false,
});
gui.domElement.id = "gui";
gui.show();

viewer.scene.skyAtmosphere.show = false;

const camera = new Camera(
  viewer,
  gui,
  {
    position: {
      longitude: 114.056178,
      latitude: 22.463280,
      height: 500,
    },
    headingPitchRoll: {
      heading: 0.0,
      pitch: -3,
      roll: 0.0,
    },
  },
  true
);

const scene = new Scene(viewer, gui);
const skyBox = new SkyBoxOnGround(
  viewer,
  gui,
  {
    show: true,
    sourcesType: "default",
    sourcesList: [
      {
        name: "star1",
        sources: {
          positiveX: "./static/skybox/stars/00h+00.jpg",
          negativeX: "./static/skybox/stars/12h+00.jpg",
          positiveY: "./static/skybox/stars/06h+00.jpg",
          negativeY: "./static/skybox/stars/18h+00.jpg",
          positiveZ: "./static/skybox/stars/06h+90.jpg",
          negativeZ: "./static/skybox/stars/06h-90.jpg",
        },
      },
      {
        name: "star2",
        sources: {
          positiveX: "./static/skybox/stars/Version2_dark_px.jpg",
          negativeX: "./static/skybox/stars/Version2_dark_mx.jpg",
          positiveY: "./static/skybox/stars/Version2_dark_py.jpg",
          negativeY: "./static/skybox/stars/Version2_dark_my.jpg",
          positiveZ: "./static/skybox/stars/Version2_dark_pz.jpg",
          negativeZ: "./static/skybox/stars/Version2_dark_mz.jpg",
        },
      },
      {
        name: "star3",
        sources: {
          positiveX: "./static/skybox/stars/tycho2t3_80_pxs.jpg",
          negativeX: "./static/skybox/stars/tycho2t3_80_mxs.jpg",
          positiveY: "./static/skybox/stars/tycho2t3_80_pys.jpg",
          negativeY: "./static/skybox/stars/tycho2t3_80_mys.jpg",
          positiveZ: "./static/skybox/stars/tycho2t3_80_pzs.jpg",
          negativeZ: "./static/skybox/stars/tycho2t3_80_mzs.jpg",
        },
      },
      {
        name: "day1",
        sources: {
          positiveX: "./static/skybox/skys/rightav9.jpg",
          negativeX: "./static/skybox/skys/leftav9.jpg",
          positiveY: "./static/skybox/skys/frontav9.jpg",
          negativeY: "./static/skybox/skys/backav9.jpg",
          positiveZ: "./static/skybox/skys/topav9.jpg",
          negativeZ: "./static/skybox/skys/bottomav9.jpg",
        },
      },
      {
        name: "day2",
        sources: {
          positiveX: "./static/skybox/skys/SunSetRight.png",
          negativeX: "./static/skybox/skys/SunSetLeft.png",
          positiveY: "./static/skybox/skys/SunSetFront.png",
          negativeY: "./static/skybox/skys/SunSetBack.png",
          positiveZ: "./static/skybox/skys/SunSetUp.png",
          negativeZ: "./static/skybox/skys/SunSetDown.png",
        },
      },
      {
        name: "day3",
        sources: {
          positiveX: "./static/skybox/skys/Right.jpg",
          negativeX: "./static/skybox/skys/Left.jpg",
          positiveY: "./static/skybox/skys/Front.jpg",
          negativeY: "./static/skybox/skys/Back.jpg",
          positiveZ: "./static/skybox/skys/Up.jpg",
          negativeZ: "./static/skybox/skys/Down.jpg",
        },
      },
    ],
  },
  false
);
