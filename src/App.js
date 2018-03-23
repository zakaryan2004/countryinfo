/*eslint no-unused-vars: "off"*/

import React, { Component } from 'react';
import _ from 'lodash';
import $ from 'jquery';
import top_png from './icons/top.png'
import ipad_iphone from './icons/ipad_iphone.png'
import Header from './component/Header_SearchBar';
import Footer from './component/footer';

var isoCountries = {
  'Afghanistan': 'AF',
  'Åland Islands': 'AX',
  'Albania': 'AL',
  'Algeria': 'DZ',
  'American Samoa': 'AS',
  'Andorra': 'AD',
  'Angola': 'AO',
  'Anguilla': 'AI',
  'Antarctica': 'AQ',
  'Antigua and Barbuda': 'AG',
  'Argentina': 'AR',
  'Armenia': 'AM',
  'Republic of Artsakh': 'AM',
  'Aruba': 'AW',
  'Australia': 'AU',
  'Austria': 'AT',
  'Azerbaijan': 'AZ',
  'The Bahamas': 'BS',
  'Bahrain': 'BH',
  'Bangladesh': 'BD',
  'Barbados': 'BB',
  'Belarus': 'BY',
  'Belgium': 'BE',
  'Belize': 'BZ',
  'Benin': 'BJ',
  'Bermuda': 'BM',
  'Bhutan': 'BT',
  'Bolivia': 'BO',
  'Bosnia and Herzegovina': 'BA',
  'Botswana': 'BW',
  'Bouvet Island': 'NO',
  'Brazil': 'BR',
  'Brunei': 'BN',
  'Bulgaria': 'BG',
  'Burkina Faso': 'BF',
  'Burundi': 'BI',
  'Cambodia': 'KH',
  'Cameroon': 'CM',
  'Canada': 'CA',
  'Cape Verde': 'CV',
  'Cayman Islands': 'KY',
  'Central African Republic': 'CF',
  'Chad': 'TD',
  'Chile': 'CL',
  'China': 'CN',
  'Christmas Island': 'CX',
  'Cocos (Keeling) Islands': 'CC',
  'Colombia': 'CO',
  'Comoros': 'KM',
  'Republic of the Congo': 'CG',
  'Democratic Republic of the Congo': 'CD',
  'Cook Islands': 'CK',
  'Costa Rica': 'CR',
  'Cote DIvoire': 'CI',
  'Croatia': 'HR',
  'Cuba': 'CU',
  'Cyprus': 'CY',
  'Czech Republic': 'CZ',
  'Denmark': 'DK',
  'Djibouti': 'DJ',
  'Dominica': 'DM',
  'Dominican Republic': 'DO',
  'Ecuador': 'EC',
  'Egypt': 'EG',
  'El Salvador': 'SV',
  'Equatorial Guinea': 'GQ',
  'Eritrea': 'ER',
  'Estonia': 'EE',
  'Ethiopia': 'ET',
  'Falkland Islands': 'FK',
  'Faroe Islands': 'FO',
  'Fiji': 'FJ',
  'Finland': 'FI',
  'France': 'FR',
  'French Guiana': 'FR',
  'French Polynesia': 'PF',
  'French Southern and Antarctic Lands': 'TF',
  'Gabon': 'GA',
  'The Gambia': 'GM',
  'Georgia (country)': 'GE',
  'Germany': 'DE',
  'Ghana': 'GH',
  'Gibraltar': 'GI',
  'Greece': 'GR',
  'Greenland': 'GL',
  'Grenada': 'GD',
  'Guadeloupe': 'FR',
  'Guam': 'GU',
  'Guatemala': 'GT',
  'Guernsey': 'GG',
  'Guinea': 'GN',
  'Guinea-Bissau': 'GW',
  'Guyana': 'GY',
  'Haiti': 'HT',
  'Vatican City': 'VA',
  'Honduras': 'HN',
  'Hong Kong': 'HK',
  'Hungary': 'HU',
  'Iceland': 'IS',
  'India': 'IN',
  'Indonesia': 'ID',
  'Iran, Islamic Republic Of': 'IR',
  'Iraq': 'IQ',
  'Ireland': 'IE',
  'Isle of Man': 'IM',
  'Israel': 'IL',
  'Italy': 'IT',
  'Jamaica': 'JM',
  'Japan': 'JP',
  'Jersey': 'JE',
  'Jordan': 'JO',
  'Kazakhstan': 'KZ',
  'Kenya': 'KE',
  'Kiribati': 'KI',
  'South Korea': 'KR',
  "North Korea": 'KP',
  'Kuwait': 'KW',
  'Kyrgyzstan': 'KG',
  'Lao People\'s Democratic Republic': 'LA',
  'Laos': 'LA',
  'Latvia': 'LV',
  'Lebanon': 'LB',
  'Lesotho': 'LS',
  'Liberia': 'LR',
  'Libya': 'LY',
  'Liechtenstein': 'LI',
  'Lithuania': 'LT',
  'Luxembourg': 'LU',
  'Macau': 'MO',
  'Republic of Macedonia': 'MK',
  'Madagascar': 'MG',
  'Malawi': 'MW',
  'Malaysia': 'MY',
  'Maldives': 'MV',
  'Mali': 'ML',
  'Malta': 'MT',
  'Marshall Islands': 'MH',
  'Martinique': 'MQ',
  'Mauritania': 'MR',
  'Mauritius': 'MU',
  'Mayotte': 'YT',
  'Mexico': 'MX',
  'Federated States of Micronesia': 'FM',
  'Moldova': 'MD',
  'Monaco': 'MC',
  'Mongolia': 'MN',
  'Montenegro': 'ME',
  'Montserrat': 'MS',
  'Morocco': 'MA',
  'Mozambique': 'MZ',
  'Myanmar': 'MM',
  'Namibia': 'NA',
  'Nauru': 'NR',
  'Nepal': 'NP',
  'Netherlands': 'NL',
  'Netherlands Antilles': 'AN',
  'New Caledonia': 'NC',
  'New Zealand': 'NZ',
  'Nicaragua': 'NI',
  'Niger': 'NE',
  'Nigeria': 'NG',
  'Niue': 'NU',
  'Norfolk Island': 'NF',
  'Northern Mariana Islands': 'MP',
  'Norway': 'NO',
  'Oman': 'OM',
  'Pakistan': 'PK',
  'Palau': 'PW',
  'State of Palestine': 'PS',
  'Panama': 'PA',
  'Papua New Guinea': 'PG',
  'Paraguay': 'PY',
  'Peru': 'PE',
  'Philippines': 'PH',
  'Pitcairn Islands': 'PN',
  'Poland': 'PL',
  'Portugal': 'PT',
  'Puerto Rico': 'PR',
  'Qatar': 'QA',
  'Reunion': 'FR',
  'Romania': 'RO',
  'Russia': 'RU',
  'Rwanda': 'RW',
  'Saint Barthélemy': 'BL',
  'Saint Helena': 'SH',
  'Saint Kitts and Nevis': 'KN',
  'Saint Lucia': 'LC',
  'Saint Martin': 'MF',
  'Saint Pierre and Miquelon': 'PM',
  'Saint Vincent and the Grenadines': 'VC',
  'Samoa': 'WS',
  'San Marino': 'SM',
  'Saudi Arabia': 'SA',
  'Senegal': 'SN',
  'Serbia': 'RS',
  'Seychelles': 'SC',
  'Sierra Leone': 'SL',
  'Singapore': 'SG',
  'Slovakia': 'SK',
  'Slovenia': 'SI',
  'Solomon Islands': 'SB',
  'Somalia': 'SO',
  'South Africa': 'ZA',
  'South Georgia And Sandwich Isl.': 'GS',
  'Spain': 'ES',
  'Sri Lanka': 'LK',
  'Sudan': 'SD',
  'Suriname': 'SR',
  'Svalbard and Jan Mayen': 'NO',
  'Swaziland': 'SZ',
  'Sweden': 'SE',
  'Switzerland': 'CH',
  'Syrian Arab Republic': 'SY',
  'Taiwan': 'TW',
  'Tajikistan': 'TJ',
  'Tanzania': 'TZ',
  'Thailand': 'TH',
  'Timor-Leste': 'TL',
  'Togo': 'TG',
  'Tokelau': 'TK',
  'Tonga': 'TO',
  'Trinidad and Tobago': 'TT',
  'Tunisia': 'TN',
  'Turkey': 'TR',
  'Turkmenistan': 'TM',
  'Turks and Caicos Islands': 'TC',
  'Tuvalu': 'TV',
  'Uganda': 'UG',
  'Ukraine': 'UA',
  'United Arab Emirates': 'AE',
  'United Kingdom': 'GB',
  'United States': 'US',
  'Uruguay': 'UY',
  'Uzbekistan': 'UZ',
  'Vanuatu': 'VU',
  'Venezuela': 'VE',
  'Vietnam': 'VN',
  'Virgin Islands, British': 'VG',
  'Virgin Islands': 'VI',
  'British Virgin Islands': 'VG',
  'Futuna (Wallis and Futuna)': 'WF',
  'Western Sahara': 'EH',
  'Yemen': 'YE',
  'Zambia': 'ZM',
  'Zimbabwe': 'ZW'
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { html: [], searchTerm: '', flagUrl: null, title: null};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.search(this.state.searchTerm)
    console.log(isoCountries['Armenia'])
  }

  titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
  }

  search = (term) => {
    term = this.titleCase(term);

    if (term === 'Usa') {
      term = 'United States';
    }

    if (term === 'Virgin Islands British') {
      term = 'British Virgin Islands';
    }

    if (term === 'Artsakh' || term === 'Karabakh' || term === 'Republic Of Artsakh' || term === 'Nagorno-karabakh Republic') {
      term = 'Republic of Artsakh';
    }

    if (term === 'Aland Islands') {
      term = 'Åland Islands'
    }

    if (term === 'Georgia') {
      term = 'Georgia (country)'
    }

    if(term === 'Bahamas')
    {
      term = 'The Bahamas';
    }

    if(term === 'Antigua And Barbuda')
    {
      term = 'Antigua and Barbuda';
    }
    
    if(term === 'Saint Barthelemy')
    {
      term = 'Saint Barthélemy';
    }

    if(term === 'Congo')
    {
      term = 'Republic of the Congo';
    }

    if(term === 'Democratic Republic Of The Congo')
    {
      term = 'Democratic Republic of the Congo';
    }

    if(term === 'Republic Of Macedonia')
    {
      term = 'Republic of Macedonia';
    }

    if(term === 'Turks And Caicos Islands')
    {
      term = 'Turks and Caicos Islands'
    }

    if(term === 'French Southern And Antarctic Lands')
    {
      term = 'French Southern and Antarctic Lands'
    }

    if(term === 'Federated States Of Micronesia')
    {
      term = 'Federated States of Micronesia'
    }

    if(term === 'Saint Kitts And Nevis')
    {
      term = 'Saint Kitts and Nevis'
    }

    if(term === 'Saint Vincent And The Grenadines')
    {
      term = 'Saint Vincent and the Grenadines'
    }

    if(term === 'Trinidad And Tobago')
    {
      term = 'Trinidad and Tobago'
    }

    if(term === 'Bosnia And Herzegovina')
    {
      term = 'Bosnia and Herzegovina'
    }

    if(term === 'State Of Palestine')
    {
      term = 'State of Palestine' 
    }

    if(term === 'Svalbard And Jan Mayen')
    {
      term = 'Svalbard and Jan Mayen'
    }

    if(term === 'Futuna')
    {
      term = 'Futuna (Wallis and Futuna)'
    }

    if(term === 'Isle Of Man')
    {
      term = 'Isle of Man'
    }

    if (term === 'Random') {
      const countries = Object.keys(isoCountries);
      term = countries[Math.floor(Math.random() * countries.length)]
    }

    if (term !== '') {

      // if (term === 'Turkey' || term === 'Azerbaijan') {
      //   this.setState({ html: '<div><h1>Are you Armenian?????!!!</h1></div>' })
      //   this.setState({ flagUrl: '' })
      // }

      if (isoCountries[term]) {
        console.log(term)
        const test = fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles=${term}&origin=*`)
          .then(results => (results.json()))
          .then(response => response.query.pages)
          .then(
            _item => {
              console.log('barev from text fetch')
              let item = Object.values(_item);
              
              this.setState({
                html: `   
              <div class="Map_div">     
              <iframe
                style= "display: inline-block; float: right;"
                width="700"
                height="450"
                frameborder="0" 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBU_fe20IdIPoMq1xUeHnG-K0vTy5xMMcA
                  &q=${term}" allowfullscreen>
              </iframe> 
              </div>`
                  + item[0].extract
              })
              this.setState({title: term})
            })
        this.setState({ flagUrl: `http://www.countryflags.io/${isoCountries[term]}/shiny/64.png` });
      }
      else {
        this.setState({ html: '<div><h1>Country Not Found!</h1></div>' })
        this.setState({ flagUrl: '' })
        this.setState({title: ''})
      }
    }
    else {
      this.setState({ html: `<div class='text_div'><p class='intro_h1'><img src='${ipad_iphone}' class='ipad_iphone' />This is a website which is using Wikipedia's API and You can find informations about any country.</p> <div class='intro_img'>  </div> </div>` });
      this.setState({ flagUrl: '' });
      this.setState({title: ''})
    }

  }

  handleScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    $("html, body").animate({ scrollTop: "0" });
    document.documentElement.scrollTop = 0;
  }

  render() {
    let search = _.debounce(term => {
      this.search(term);
    }, 0);

    

    return (
      <div>
        <button onClick={this.topFunction} id="myBtn" title="Go to top"> <div> <img src={top_png} width="50px" alt=''/> </div> </button>
        <Header Search={term => this.search(term)} />
        <h1 className='title'>{this.state.title}</h1>
        <img width="128px" src={this.state.flagUrl} alt='' />
        <div className='text_div' dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
        
        <Footer />
      </div>
    );
  }
}

export default App;