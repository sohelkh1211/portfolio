// This file is required because you can't import all the components from this folder directly in an outside file.
// index.js exports all the .jsx file from this components folder.
// Otherwise it throws an error
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Work from './Work';
import Body from './Body';
import Experience from './Experience';
import Tech from './Tech';

export {
    About,
    Work,
    Navbar,
    Contact,
    Body,
    Experience,
    Tech,
};