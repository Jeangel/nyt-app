import React from 'react';
import { Input } from 'reactstrap';

export default function SelectMaterial(props) {

    return (
        <>
            <Input type="select" {...props}>
                <option value="Addendum">Addendum</option>
                <option value="An Analysis">An Analysis</option>
                <option value="An Appraisal">An Appraisal</option>
                <option value="Article">Article</option>
                <option value="Banner">Banner</option>
                <option value="Biography">Biography</option>
                <option value="Birth Notice">Birth Notice</option>
                <option value="Blog">Blog</option>
                <option value="Brief">Brief</option>
                <option value="Caption">Caption</option>
                <option value="Chronology">Chronology</option>
                <option value="Column">Column</option>
                <option value="Correction">Correction</option>
                <option value="Economic Analysis">Economic Analysis</option>
                <option value="Editorial">Editorial</option>
                <option value="Editorial Cartoon">Editorial Cartoon</option>
                <option value="Editors' Note">Editors' Note</option>
                <option value="First Chapter">First Chapter</option>
                <option value="Front Page">Front Page</option>
                <option value="Glossary">Glossary</option>
                <option value="Interactive Feature">Interactive Feature</option>
                <option value="Interactive Graphic">Interactive Graphic</option>
                <option value="Interview">Interview</option>
                <option value="Letter">Letter</option>
                <option value="List">List</option>
                <option value="Marriage Announcement">Marriage Announcement</option>
                <option value="Military Analysis">Military Analysis</option>
                <option value="News">News</option>
                <option value="News Analysis">News Analysis</option>
                <option value="Newsletter">Newsletter</option>
                <option value="Obituary">Obituary</option>
                <option value="Obituary (Obit)">Obituary (Obit)</option>
                <option value="Op-Ed">Op-Ed</option>
                <option value="Paid Death Notice">Paid Death Notice</option>
                <option value="Postscript">Postscript</option>
                <option value="Premium">Premium</option>
                <option value="Question">Question</option>
                <option value="Quote">Quote</option>
                <option value="Recipe">Recipe</option>
                <option value="Review">Review</option>
                <option value="Schedule">Schedule</option>
                <option value="SectionFront">SectionFront</option>
                <option value="Series">Series</option>
                <option value="Slideshow">Slideshow</option>
                <option value="Special Report">Special Report</option>
                <option value="Statistics">Statistics</option>
                <option value="Summary">Summary</option>
                <option value="Text">Text</option>
                <option value="Video">Video</option>
                <option value="Web Log">Web Log</option>

            </Input>
        </>
    );
}