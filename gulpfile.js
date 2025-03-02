import { task, series, parallel } from 'gulp';
import buildReactTask from "./Tasks/build-react";
import { moveReactJsTask, moveReactCssTask } from "./Tasks/move-react";

task('build:react', buildReactTask);

task('move:react-js', moveReactJsTask)

task('move:react-css', moveReactCssTask)

task('move:react-out', parallel("move:react-js", "move:react-css"));

task('compile:react', series("build:react", "move:react-out"));