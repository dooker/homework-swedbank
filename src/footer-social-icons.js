class FooterSocialIcons extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                @import "../stylesheet/footer-social-icons.css";
            </style>

            <ul class="social-media">
                <li>
                    <a href="https://www.facebook.com">
                        <img src="../assets/social%20media%20icons/facebook.svg" alt="Facebook"/>                    
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com">
                        <img src="../assets/social%20media%20icons/instagram.svg" alt="Instagram"/>                    
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com">
                        <img src="../assets/social%20media%20icons/youtube.svg" alt="Youtube"/>                    
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com">
                        <img src="../assets/social%20media%20icons/twitter.svg" alt="Twitter"/>                    
                    </a>
                </li>
                <li>
                    <a href="https://www.skype.com">
                        <img src="../assets/social%20media%20icons/skype.svg" alt="Skype"/>                    
                    </a>
                </li>
            </ul>
        `;
    }
}

customElements.define("footer-social-icons", FooterSocialIcons);
