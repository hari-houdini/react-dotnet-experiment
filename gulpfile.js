import { task, series, parallel } from 'gulp';
import buildReactTask from "./Tasks/build-react.js";
import { moveReactJsTask, moveReactCssTask } from "./Tasks/move-react.js";

task('build:react', buildReactTask);

task('move:react-js', moveReactJsTask)

task('move:react-css', moveReactCssTask)

task('move:react-out', parallel("move:react-js", "move:react-css"));

task('compile:react', series("build:react", "move:react-out"));

task('build', parallel("compile:react"));