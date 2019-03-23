window.onload = function() {
    routeRender()
    toggleElement('route-container', 'show', 'fade')
}

const homeHTML = `         
            <div class='background-image image-1'>
                <div class='over-image lightblue-transparent title'>
                    <h1>WELCOME TO CORNERSTONE MANOR</h1>
                </div>
            </div>
            <div class='caption lightgreen'>
                <h2>Quiet, fireproof, energy efficient apartments located in the heart of Northwest Mesa, Arizona.</h2>
            </div>
            <div class='background-image image-2'></div>
            <div class="caption blue">
                <h2>Large floor plans with included amenities and facilities - <span title='Go to Gallery' class='gallery-link'  onclick="changeRoute('gallery')"> see the gallery for more!</span></h2>
            </div>
            <div class="background-image image-3">
                <div class="over-image lightgreen-transparent"></div>
            </div>
`

const contactHTML = `
    <div class='page-container'>
        <div class='menu-bar title'></div>
        <div class='page-top'>
            <h1 class='title'>CONTACT</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.928720036603!2d-111.81549668435885!3d33.45116355661152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba700e95b4dfb%3A0x4acd31e8a20266d6!2s1955+N+Horne%2C+Mesa%2C+AZ+85203!5e0!3m2!1sen!2sus!4v1553219208915" width="90%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class='page-bottom'>
            <span class='accent prompt'>(480) 964-5151</span>
            <span>If you have any questions or would like to take a tour of one of our apartments, please call or visit us and knock on the manager's apartment door (Unit 110). They'd love to talk to you!</span>
            <div class='office-hours'>
                <div class='accent large'>Office Hours</div>
                <div class='hours-table'>
                    <div><div>Monday</div><div>2 pm - 6 pm</div></div>
                    <div><div>Tuesday</div><div>2 pm - 6 pm</div></div>
                    <div><div>Wednesday</div><div>2 pm - 6 pm</div></div>
                    <div><div>Thursday</div><div>2 pm - 6 pm</div></div>
                    <div><div>Friday</div><div>2 pm - 6 pm</div></div>
                    <div><div>Saturday</div><div>11 am - 3 pm</div></div>
                    <div><div>Sunday</div><div>CLOSED</div></div>
                </div>
            </div>
        </div>
    </div>
`

const images = {
    community: [
        {
            url: "http://3.bp.blogspot.com/_OZCAYOVkpQQ/TS-GxTMT4DI/AAAAAAAAACs/hwnZEvIXAdQ/s320/DSC07364.JPG",
            caption: 'Entryway'
        },
        {
            url: "http://1.bp.blogspot.com/_OZCAYOVkpQQ/TS-GySxXkMI/AAAAAAAAACw/2XiEGgLhu1I/s320/DSC07365.JPG",
            caption: 'Courtyard'
        },
        {
            url: "http://4.bp.blogspot.com/_OZCAYOVkpQQ/TS-Gzyb31CI/AAAAAAAAAC0/MTxq6NNChc0/s320/DSC07366.JPG",
            caption: 'Pool'
        },
        {
            url: "http://4.bp.blogspot.com/_OZCAYOVkpQQ/TS-G1QuteFI/AAAAAAAAAC4/SDq0STjaOwo/s320/DSC07367.JPG",
            caption: 'Courtyard'
        },
        {
            url: "http://1.bp.blogspot.com/_OZCAYOVkpQQ/TS-G2kklSsI/AAAAAAAAAC8/-E8u1usocUE/s320/DSC07368.JPG",
            caption: "Pool"
        },
        {
            url: "http://1.bp.blogspot.com/_OZCAYOVkpQQ/TS-G4JzcXcI/AAAAAAAAADA/Z-ePG3XuWck/s320/DSC07369.JPG",
            caption: "Northwest Stairway"
        },
        {
            url: "http://4.bp.blogspot.com/_OZCAYOVkpQQ/TS-G5DL-4UI/AAAAAAAAADE/fybrw_UxWjM/s320/DSC07370.JPG",
            caption: "Courtyard"
        }
    ],
    floorPlanB: [
        {
            url: "https://2.bp.blogspot.com/-1TrpvFceP1M/W7KPtpGNrQI/AAAAAAAABlc/LiQydYBdcrIJAwFLRZ9Kw0-0O5fEgrjIwCLcBGAs/s320/20181001_132152.jpg",
            caption: 'Front Door / Entryway'
        },
        {
            url: "https://3.bp.blogspot.com/-SGLbjllsa4k/W7KPtr8dChI/AAAAAAAABlY/5Eln5eK4qwsv69-DLhyS6xO27YEiTGJXwCLcBGAs/s320/20181001_132320.jpg",
            caption: "China Hutch"
        },
        {
            url: "https://2.bp.blogspot.com/-zzPLE8nGRZo/W7KPtql_drI/AAAAAAAABlg/NtQVnurH39Q1DQUDWXteQlI6VKBpm2OqQCLcBGAs/s320/20181001_132328.jpg",
            caption: "Master Linen Closet"
        },
        {
            url: "https://3.bp.blogspot.com/-nN-oV_IOzs4/W7KPuF3HqKI/AAAAAAAABlk/dOhuJ8I0MxYMx5VyzmKrqcRwUh8eeeqnQCLcBGAs/s320/20181001_132337.jpg",
            caption: "Master Bath"
        },
        {
            url: "https://3.bp.blogspot.com/-ZeO0rc061f8/W7KPudpKYkI/AAAAAAAABlo/9SAtmo2M6Mko3QKL_E_wxS8FartCZS76gCLcBGAs/s320/20181001_132347.jpg",
            caption: "Master Walk-In Closet"
        },
        {
            url: "https://2.bp.blogspot.com/-L18Ga0HcreI/W7KPugIl4yI/AAAAAAAABls/VnMFCWGKmcATkdhmVbfmcisHc8UriQjfwCLcBGAs/s320/20181001_132354.jpg",
            caption: "Master Bath"
        },
        {
            url: "https://3.bp.blogspot.com/-Miqr5GBlLrM/W7KPvFyrMcI/AAAAAAAABlw/0M9NhiiR2_gJZ-CViHo0G4-NRQwtHUlmQCLcBGAs/s320/20181001_132415.jpg",
            caption: "Master Bedroom"
        },
        {
            url: "https://3.bp.blogspot.com/-HoxaHZBAbSE/W7KPvT2frcI/AAAAAAAABl4/yoyUdvTVd78mLYJ2Ez_J-9vGO9Zkn-DGwCLcBGAs/s320/20181001_132452.jpg",
            caption: "Entryway with China Hutch"
        },
        {
            url: "https://1.bp.blogspot.com/-jf6IVpbxIxA/W7KPvbPp1XI/AAAAAAAABl8/oaXLQa-yP8sTv4eie2H-fknq0nboU1_RwCLcBGAs/s320/20181001_132502.jpg",
            caption: "Dining Room"
        },
        {
            url: "https://3.bp.blogspot.com/-gPDqiiBaTOc/W7KPvlH1C1I/AAAAAAAABmA/TyzK2pD7Vcwp4Xr0ygC990tO_9xgl-ZQACLcBGAs/s320/20181001_132510.jpg",
            caption: "Kitchen"
        },
        {
            url: "https://3.bp.blogspot.com/-PYjPx07j8Bw/W7KPv2c7aII/AAAAAAAABmE/jLG524OHj8UBG6aTjyysIxZ7b3sqrki4gCLcBGAs/s320/20181001_132515.jpg",
            caption: "Kitchen"
        },
        {
            url: "https://1.bp.blogspot.com/-sOMem7fs8rg/W7KPwEeSmAI/AAAAAAAABmI/6v6M61KE2r8eJoCKaHKBrB4V_kH418GfwCLcBGAs/s320/20181001_132523.jpg",
            caption: "Dining Room"
        },
        {
            url: "https://4.bp.blogspot.com/-_LEwOnn9aV8/W7KPwccG6_I/AAAAAAAABmM/ESgv4KBFtGMMQ9JAhVStX8UEP3Tr937sgCLcBGAs/s320/20181001_132532.jpg",
            caption: "Living Room"
        },
        {
            url: "https://2.bp.blogspot.com/-ONIdN73BFC4/W7KPwgKvxAI/AAAAAAAABmQ/sIjyBt6grHgqVn3dEqmeBwoivJ8JjBpegCLcBGAs/s320/20181001_132542.jpg",
            caption: "Second Bathroom"
        },
        {
            url: "https://3.bp.blogspot.com/-OsrsRedSzC0/W7KPwyYa0JI/AAAAAAAABmU/yoPScuLl2PsdH6cTrepKxgjkqNZOV3StQCLcBGAs/s320/20181001_132548.jpg",
            caption: "Second Bathroom"
        },
        {
            url: "https://1.bp.blogspot.com/-D65U8BC7iHk/W7KPxAdRGDI/AAAAAAAABmY/ZvgyqLf2FksbIhi0ybLkFgH7VO5oWfGYwCLcBGAs/s320/20181001_132555.jpg",
            caption: "Second Bedroom"
        },
        {
            url: "https://3.bp.blogspot.com/-J-imN20D72I/W7KPxWIZaUI/AAAAAAAABmc/cwN21My5UaYGx2IgCowGuE4Vd6qKoM_ywCLcBGAs/s320/20181001_132605.jpg",
            caption: "Second Bedroom"
        },
        {
            url: "https://4.bp.blogspot.com/-uGzTLh4FAsw/W7KPxsoHvlI/AAAAAAAABmg/13VNx3OVycQX8G7zPpsVwK1qkXxkw1a3gCLcBGAs/s320/20181001_132631.jpg",
            caption: "Living Room / Dining Room"
        },
        {
            url: "https://2.bp.blogspot.com/-ia-Nz-W2kgo/W7KPyImj6GI/AAAAAAAABmk/vyalMPVUmdQ3cdfh7Gn46c79tW1hFE4tgCLcBGAs/s320/20181001_132645.jpg",
            caption: "Patio"
        },
        {
            url: "https://2.bp.blogspot.com/-dK0eu_VN0Os/W7KPyGz3T3I/AAAAAAAABmo/J8g46clBUMYNbvEOFiNYbZLoYRuORlU7gCLcBGAs/s320/20181001_132659.jpg",
            caption: "Laundry Room Washer + Dryer Hookups"
        }
    ],
    floorPlanC: [
        {
            url: "https://3.bp.blogspot.com/-gHyto_2-qd4/W7KNyuLYjXI/AAAAAAAABjc/GcDYiAm12tkC2qdWTxkYIZGHCwLt2gWEACLcBGAs/s320/20181001_130349.jpg",
            caption: "Front Door and Entryway"
        },
        {
            url: "https://1.bp.blogspot.com/-6B_R_BAEELA/W7KN4hy91jI/AAAAAAAABjk/smQP0ONcCmEz1OXpFbw3Naq1fstvxNMPACLcBGAs/s320/20181001_130423.jpg",
            caption: "Master Bedroom Linen Closet"
        },
        {
            url: "https://3.bp.blogspot.com/-rPTDcojqFDA/W7KN4TRn03I/AAAAAAAABjg/s2XhJWVpwlA7enzdRyv8lMCd34NiWGPSwCLcBGAs/s320/20181001_130440.jpg",
            caption: "Master Walk-in Closet"
        },
        {
            url: "https://1.bp.blogspot.com/-SLLh8qXxJkg/W7KN4hAgjYI/AAAAAAAABjo/kfnlQK7brmkCqK6vMejJi6hL_9xRh_3vwCLcBGAs/s320/20181001_130501.jpg",
            caption: "Master Bathroom"
        },
        {
            url: "https://2.bp.blogspot.com/-CdiQNrQo8Tg/W7KN5GM40SI/AAAAAAAABjs/4BcMZlhN8ZUv0QH3NVauBUSkAR7m7LRRACLcBGAs/s320/20181001_130509.jpg",
            caption: "Master Bathroom"
        },
        {
            url: "https://2.bp.blogspot.com/-T6fyHHR9Xlw/W7KN5d3__OI/AAAAAAAABjw/cBKro-v7PuopHFE88FkZBe9Qj7fWlD18ACLcBGAs/s320/20181001_130517.jpg",
            caption: "Master Bathroom"
        },
        {
            url: "https://3.bp.blogspot.com/-bzlvGIP8GyM/W7KN51V3OII/AAAAAAAABj0/TNyHm5coLcszjB7IZ2U_9AvGdJ2Lb3qmgCLcBGAs/s320/20181001_130535.jpg",
            caption: "Master Bedroom"
        },
        {
            url: "https://1.bp.blogspot.com/-1A3xI3knakE/W7KN6CHs4ZI/AAAAAAAABj4/pJNgQRb4a2INXas8Ifv1BtwCzg-No-JRQCLcBGAs/s320/20181001_130546.jpg",
            caption: "Master Bedroom"
        },
        {
            url: "https://2.bp.blogspot.com/-eWUr51W4gCE/W7KN6RTIevI/AAAAAAAABj8/hGVtvfAuEcocBcynB6LX6k6_7FfqVsEjgCLcBGAs/s320/20181001_130609.jpg",
            caption: "Entryway"
        },
        {
            url: "https://4.bp.blogspot.com/-j42g58OiU_s/W7KN6Uxaw_I/AAAAAAAABkA/znlUmiyB_pIpbMLuL5S3VMPGPZTRvs7cQCLcBGAs/s320/20181001_130633.jpg",
            caption: "Living Room"
        },
        {
            url: "https://2.bp.blogspot.com/-Carfudoo9Eo/W7KN6xfjvxI/AAAAAAAABkE/8I5eMmy8BnkTJTNRF5RNZ1jpUlX9leIrgCLcBGAs/s320/20181001_130646.jpg",
            caption: 'Dining Room'
        },
        {
            url: "https://4.bp.blogspot.com/-ZcmfoB99d-E/W7KN7DT1_qI/AAAAAAAABkI/sIetlPbksjMjeFWbFHTBq3VtAg-wbRzPACLcBGAs/s320/20181001_130655.jpg",
            caption: "Living Room"
        },
        {
            url: "https://2.bp.blogspot.com/-xfhq-pIteZE/W7KN7DytWCI/AAAAAAAABkM/5B07r8tGJwgwKafJo5IJS0uyc9yDnAIJwCLcBGAs/s320/20181001_130702.jpg",
            caption: "Kitchen"
        },
        {
            url: "https://4.bp.blogspot.com/-RudKkrpmIYM/W7KN7jeaF-I/AAAAAAAABkQ/LNx5Eas7dC4qfPGlgkxqiEsfsUfznz8YACLcBGAs/s320/20181001_130708.jpg",
            caption: "Kitchen"
        },
        {
            url: "https://2.bp.blogspot.com/-TcGGtGfDxvM/W7KN8L6EN3I/AAAAAAAABkU/gTaNYUcjc2MfIjIWFBq8VEFc4WMQP48IwCLcBGAs/s320/20181001_130719.jpg",
            caption: "Living Room / Dining Room"
        },
        {
            url: "https://3.bp.blogspot.com/-6W7crNgLEF0/W7KN8TWCWSI/AAAAAAAABkY/CWQS7s-or9cRjQ31nxs8n3p4ITtcM5q4wCLcBGAs/s320/20181001_130739.jpg",
            caption: "Second Bathroom"
        },
        {
            url: "https://2.bp.blogspot.com/-1SfiI0PZmns/W7KN8vfMlJI/AAAAAAAABkc/KbRjQyMzsl0zLPlB6l-pO2ttiY9UTWMVgCLcBGAs/s320/20181001_130746.jpg",
            caption: "Second Bathroom"
        },
        {
            url: "https://4.bp.blogspot.com/-uXWe54Fnl8M/W7KN80yyVKI/AAAAAAAABkg/e_OsmT707xQzHCYlT2M7PKip9-FLS_9QQCLcBGAs/s320/20181001_130755.jpg",
            caption: "Second Bedroom"
        },
        {
            url: "https://1.bp.blogspot.com/-9S_8P3ZvSCs/W7KN9IxO9AI/AAAAAAAABkk/oZNmXsOqIbMLUPoH2ReZumUR91XciofJwCLcBGAs/s320/20181001_130804.jpg",
            caption: "Second Bedroom"
        },
        {
            url: "https://3.bp.blogspot.com/-FNQPEQPL1uM/W7KN9cm0DtI/AAAAAAAABko/__Y5Gkddoy4AZwZBj8e9H9EpViWyEsy0QCLcBGAs/s320/20181001_130834.jpg",
            caption: "Back Door / Patio"
        },
        {
            url: "https://4.bp.blogspot.com/-piZxKXpinNw/W7KN9XtjLYI/AAAAAAAABks/DgPTWQV5KxkVJLKEsNJvIb2cVzzPjPnUgCLcBGAs/s320/20181001_130906.jpg",
            caption: "Laundry Room"
        },
        {
            url: "https://1.bp.blogspot.com/-ilTXuG_qWt4/W7KN9k-UdWI/AAAAAAAABkw/1jtypFZBm1ELFoLiWDV3kl3cHZBv45oMwCLcBGAs/s320/20181001_130912.jpg",
            caption: "Washer + Dryer Hookups"
        },
        {
            url: "https://4.bp.blogspot.com/-Ke9DzYQ5oew/W7KN98DgwMI/AAAAAAAABk0/U08ENuTDjrYTGbhluQE8CsTMgaMgRFg6ACLcBGAs/s320/20181001_130928.jpg",
            caption: "Back Patio"
        }
    ]
}

// Special information for chosen type
const communityInfo = `
    <h2>COMMUNITY FEATURES</h2>
    <ul>
        <li>Unique European Architecture</li>
        <li>Bike Racks</li>
        <li>Courtyard</li>
        <li>Fountain</li>
        <li>Pool</li>
        <li>Covered Parking Spaces</li>
    </ul>
`

const planBInfo = `
    <h2>FLOOR PLAN B FEATURES</h2>
    <ul>
        <li>Walk-In Closet</li>
        <li>Linen Closet</li>
        <li>China Hutch</li>
    </ul>
    <br>
    <div class='prompt accent medium lightgreen'>
        <div>1218 Square Feet</div>
        <div>$950 + tax</div>
    </div>
`

const planCInfo = `
    <h2>FLOOR PLAN C FEATURES</h2>
    <ul>
        <li>Walk-In Closet</li>
        <li>Large Linen Closet</li>
    </ul>
    <br>
    <div>1254 Square Feet</div>
    <div>$950 + tax</div>
`

// For changing the displayed list of images
let selectedImages = 'community'
let slideIndex = 1;
function chooseImageType(type) {
    slideIndex = 1
    document.getElementById('image-slides').innerHTML = `
        ${images[type].map((image, index) => (`
            <div class="mySlides fade">
                <div class="numbertext">${index+1} / ${images[type].length}</div>
                <img src=${image.url} style="width:100%; height:100%;" alt='Cornerstone Manor Apartments Mesa Arizona'>
                <div class="text">${image.caption}</div>
            </div>
        `)).join('')}
    `
    document.getElementById('image-nav').innerHTML = `
        <ul>
            <li onclick='chooseImageType("community")' class=${type === 'community' ? 'selected' : ''}>Community</li>
            <li onclick='chooseImageType("floorPlanB")' class=${type === 'floorPlanB' ? 'selected' : ''}>Floor Plan B</li>
            <li onclick='chooseImageType("floorPlanC")' class=${type === 'floorPlanC' ? 'selected' : ''}>Floor Plan C</li>
        </ul>
    `

    document.getElementById('specifics').innerHTML = type === "community" ? communityInfo : type === 'floorPlanB' ? planBInfo : type === 'floorPlanC' ? planCInfo : ''
    showSlides(slideIndex);
}

const galleryHTML = `
    <div class='page-container'>
        <div class='menu-bar title'></div>
        <div class='page-top'>
            <h1 class='title'>GALLERY</h1>
        </div>
        <div class='page-bottom'>
            <div id='image-nav' class='image-nav'>
                <ul>
                    <li onclick='chooseImageType("community")' class=${selectedImages === 'community' ? 'selected' : ''}>Community</li>
                    <li onclick='chooseImageType("floorPlanB")' class=${selectedImages === 'floorPlanB' ? 'selected' : ''}>Floor Plan B</li>
                    <li onclick='chooseImageType("floorPlanC")' class=${selectedImages === 'floorPlanC' ? 'selected' : ''}>Floor Plan C</li>
                </ul>
            </div>
            <div class="slideshow-container">
                <div id='image-slides'>
                    ${images[selectedImages].map((image, index) => (`
                        <div class="mySlides fade">
                            <div class="numbertext">${index+1} / ${images[selectedImages].length}</div>
                            <img src=${image.url} style="width:100%; height:100%;" alt='Cornerstone Manor Apartments Mesa Arizona'>
                            <div class="text">${image.caption}</div>
                        </div>
                    `)).join('')}
                </div>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            <div class='info-container'>
                <div id='specifics'>
                    ${selectedImages === "community" ? communityInfo : selectedImages === 'floorPlanB' ? planBInfo : selectedImages === 'floorPlanC' ? planCInfo : ''}
                </div>
                <h2>EACH APARTMENT INCLUDES</h2>
                <ul>
                    <li>Two Full Bathrooms</li>
                    <li>Two Large Master Bedrooms</li>
                    <li>Pre-Installed Cable-Ready Wiring</li>
                    <li>Laundry/Storage Room with Washer + Dryer Hookups</li>
                    <li>Dishwasher, Stove, and Refrigerator</li>
                    <li>Dining Room with Ceiling Fan</li>
                    <li>Private Balcony or Patio</li>
                    <li>Mirrored Closet Doors</li>
                    <li>Large Living Room</li>
                    <li>One Covered Parking Space</li>
                    <li>One Open Parking Space</li>
                    <li>NO Extra Charges for Water or Garbage Service</li>
                </ul>
                <br>
                <br>
                <div class='medium'>Cornerstone Manor apartments are the most affordable \(per square foot\) in Northern Mesa!</div>
                <div class='medium'>All of our beautiful units have concrete walls floors and ceilings. They are fireproof, very quiet and energy efficient.</div>
                <br>
                <div class='small'>Sorry, residents are not permitted to have pets.</div> 
                <div class='accent contact-link' onclick="changeRoute('contact')" title='Go to Contact Page'>Interested? Click here to contact us!</div>
            </div>
        </div>
    </div>
`

// Handles all the routing rendering functionality
function routeRender() {
    const path = window.location.hash.toLowerCase()
    const routeContainer = document.getElementById('route-container')
    if(!window.location.hash || path === '#/') {
        document.getElementById('home-nav').style.textDecoration = 'underline'
        routeContainer.innerHTML = homeHTML
        window.removeEventListener('keydown', arrowControls)
    } else if (path === '#/contact' || path === '#/contact/') {
        document.getElementById('contact-nav').style.textDecoration = 'underline'
        routeContainer.innerHTML = contactHTML
        window.removeEventListener('keydown', arrowControls)
    } else if (path === '#/gallery' || path === '#/gallery/') {
        document.getElementById('gallery-nav').style.textDecoration = 'underline'
        routeContainer.innerHTML = galleryHTML
        showSlides(slideIndex);
        window.addEventListener('keydown', arrowControls)
    } else {
        // The user entered a route that doesn't exist - go back to home page
        window.history.replaceState({location: ''}, '#/', `#/`)
        routeRender()
    }
}

// Switches routes. Uses hashes to circumvent the browser doing a fetch.
function changeRoute(route) {
    // The user is already on the page, don't re-render
    if(window.location.hash === `#/${route}`) { 
        return toggleNav('hide')
    }
    document.getElementById('home-nav').style.textDecoration = 'none'
    document.getElementById('contact-nav').style.textDecoration = 'none'
    document.getElementById('gallery-nav').style.textDecoration = 'none'
    toggleElement('route-container', 'hide', 'fade')
    window.history.replaceState({location: route}, route, `#/${route}`)
    toggleNav('hide')
    routeRender()
    setTimeout(() => {
        toggleElement('route-container', 'show', 'fade')
    }, 500);
}

// Alters the class of a chose element to do a fade or slide animation
function toggleElement(element, toggle, type) {
    const chosenElement = document.getElementById(element)
    if (chosenElement.classList) {
        if (toggle === 'show') {
            if(type === 'slide') {
                chosenElement.classList.add('slide')
            }
            if(type === 'fade') {
                chosenElement.classList.add('visible');
            }
        } else if (toggle === 'hide') {
            chosenElement.classList.remove('visible');
            chosenElement.classList.remove('slide')
        }
	}
	else {
		var regExp = new RegExp('(\\s|^)' + type === 'slide' ? 'slide' : 'visible' + '(\\s|$)');
		if (!chosenElement.className.match(regExp)) {
            if (toggle === 'show') {
                chosenElement.className += " " + type === 'slide' ? 'slide' : 'visible';
            } else if (toggle === 'hide') {
                chosenElement.className.replace(regExp, ' ');
            }
		}
	}
}

// Fired when the user clicks the nav button. Toggle will be 'show' or 'hide'
function toggleNav(toggle) {
    toggleElement("navigation-panel", toggle, "slide")
    toggleElement('panel-cover', toggle, 'fade')
}

// Slideshow functions

// Use the left and right arrow keys to control slideshow
function arrowControls(e) {
    if(e.keyCode === 39) {
        plusSlides(1)
    } else if (e.keyCode === 37) {
        plusSlides(-1)
    }
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "flex"; 
}