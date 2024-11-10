<ol>
<li>Created a Paragraph  with name "Speaker" with fields field_name, field_photo, field_designation, field_orgranization, field_bio, field_social_link_drupal, field_social_link_linkedin, field_social_link_x</li>
<li>Created a Block type "Speakers" with fields field_title, field_speakers references paragraph Speaker,field_footer_text,field_cta</li>
<li>Created Landing page content type for that enabled layout builder</li>
<li>Added section to layout builder added blocktype  "speakers" and added speaker related content  </li>
<li>Created "demo" theme in custom folder overwritten "block--inline-block--speakers.html.twig"</li>
<li>Created the speaker Single Directory Component(SDC) and included th variables in "block--inline-block--speakers.html.twig" </li>
<li>Inspeakers created twig ,scss,css,js and written code for  creating SplideJS carosel,pop up</li>
<li>Note: Used ddev and Docker-desktop in local,Did not used any Jquery </li>
</ol>
