import React from 'react';
import { useEffect } from 'react';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { Link } from 'gatsby';


function Consent() {
	useEffect(() => {
		if (getCookieConsentValue()) {
			window.gtag('consent', 'update', {
				'analytics_storage': 'granted'
			});
		}
	});

	useEffect(() => {
		document.title = "Cookie Policy page";
	}, []);

	return(

		<CookieConsent
			location="top"
			buttonText="Accept"
			declineButtonText="Decline"
			enableDeclineButton
			style={{ background: "#2B373B", position: 'inherit' }}
			buttonStyle={{ color: "white", backgroundColor: '#cd2456', fontSize: "13px" }}
			declineButtonStyle={{ color: "white", backgroundColor: '#93a3b1', fontSize: "13px" }}
			expires={150}
			onAccept={(acceptedByScrolling) => {
				if (window.gtag) {
					window.gtag('consent', 'update', {
						'analytics_storage': 'granted'
					});
				}
			}}
		>
			This website uses cookies to understand user behaviour.{' '}
			{
				// link with white text
			}
			<Link to='/privacy' style={{color:'white'}}>Privacy Statement</Link>
		</CookieConsent>
	)
}

export default Consent
