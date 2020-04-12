import * as $ from 'jquery';
import Post from './post';
import './babel';
import '@style/style.css';
import '@style/style.scss';

const post = new Post('Webpack post title');

$('pre').html(post.toString());