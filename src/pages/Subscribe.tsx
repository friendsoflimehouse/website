import { Box, Card, CardBody } from "@chakra-ui/react";

const mailChimpHTML = `
<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
    <form action="https://friendsoflimehouse.us12.list-manage.com/subscribe/post?u=833dbc0c3cedbcdafd1c73046&amp;id=a575acf5eb&amp;f_id=00e744e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self">
        <div id="mc_embed_signup_scroll">
        
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
	<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
</div>
	<div id="mce-responses" class="clear foot">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_833dbc0c3cedbcdafd1c73046_a575acf5eb" tabindex="-1" value=""></div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                <p class="brandingLogo"><a href="http://eepurl.com/itbKOQ" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
            </div>
        </div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
`;

export const Subscribe = () => {
  return (
    <Card>
      <CardBody>
        <Box
          dangerouslySetInnerHTML={{ __html: mailChimpHTML }}
          sx={{
            minHeight: 600,
          }}
        />
        ;
      </CardBody>
    </Card>
  );
};
