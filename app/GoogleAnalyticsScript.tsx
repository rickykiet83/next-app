import React from 'react';
import Script from 'next/script';

const GoogleAnalyticsScript = () => {
	return (
		<>
			<Script
				async
				src='https://www.googletagmanager.com/ns.html?id=GTM-PT86QXBV'
			/>
			<Script id='google-analytics'>
				{`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-PT86QXBV');`}
			</Script>
		</>
	);
};

export default GoogleAnalyticsScript;
