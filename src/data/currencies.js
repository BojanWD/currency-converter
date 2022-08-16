const currencies = [
  { title: "AFN", name: "Afghan Afghani", country: "Afghanistan" },
  { title: "ALL", name: "Albanian Lek", country: "Albania" },
  { title: "AMD", name: "Armenian Dram", country: "Armenia" },
  {
    title: "ANG",
    name: "Netherlands Antillian Guilder",
    country: "Netherlands Antilles",
  },
  { title: "AOA", name: "Angolan Kwanza", country: "Angola" },
  { title: "ARS", name: "Argentine Peso", country: "Argentina" },
  { title: "AUD", name: "Australian Dollar", country: "Australia" },
  { title: "AWG", name: "Aruban Florin", country: "Aruba" },
  { title: "AZN", name: "Azerbaijani Manat", country: "Azerbaijan" },
  {
    title: "BAM",
    name: "Bosnia and Herzegovina Mark",
    country: "Bosnia and Herzegovina",
  },
  { title: "BBD", name: "Barbados Dollar", country: "Barbados" },
  { title: "BDT", name: "Bangladeshi Taka", country: "Bangladesh" },
  { title: "BGN", name: "Bulgarian Lev", country: "Bulgaria" },
  { title: "BHD", name: "Bahraini Dinar", country: "Bahrain" },
  { title: "BIF", name: "Burundian Franc", country: "Burundi" },
  { title: "BMD", name: "Bermudian Dollar", country: "Bermuda" },
  { title: "BND", name: "Brunei Dollar", country: "Brunei" },
  { title: "BOB", name: "Bolivian Boliviano", country: "Bolivia" },
  { title: "BRL", name: "Brazilian Real", country: "Brazil" },
  { title: "BSD", name: "Bahamian Dollar", country: "Bahamas" },
  { title: "BTN", name: "Bhutanese Ngultrum", country: "Bhutan" },
  { title: "BWP", name: "Botswana Pula", country: "Botswana" },
  { title: "BYN", name: "Belarusian Ruble", country: "Belarus" },
  { title: "BZD", name: "Belize Dollar", country: "Belize" },
  { title: "CAD", name: "Canadian Dollar", country: "Canada" },
  {
    title: "CDF",
    name: "Congolese Franc",
    country: "Democratic Republic of the Congo",
  },
  { title: "CHF", name: "Swiss Franc", country: "Switzerland" },
  { title: "CLP", name: "Chilean Peso", country: "Chile" },
  { title: "CNY", name: "Chinese Renminbi", country: "China" },
  { title: "COP", name: "Colombian Peso", country: "Colombia" },
  { title: "CRC", name: "Costa Rican Colon", country: "Costa Rica" },
  { title: "CUP", name: "Cuban Peso", country: "Cuba" },
  { title: "CVE", name: "Cape Verdean Escudo", country: "Cape Verde" },
  { title: "CZK", name: "Czech Koruna", country: "Czech Republic" },
  { title: "DJF", name: "Djiboutian Franc", country: "Djibouti" },
  { title: "DKK", name: "Danish Krone", country: "Denmark" },
  { title: "DOP", name: "Dominican Peso", country: "Dominican Republic" },
  { title: "DZD", name: "Algerian Dinar", country: "Algeria" },
  { title: "EGP", name: "Egyptian Pound", country: "Egypt" },
  { title: "ERN", name: "Eritrean Nakfa", country: "Eritrea" },
  { title: "ETB", name: "Ethiopian Birr", country: "Ethiopia" },
  { title: "EUR", name: "Euro", country: "European Union" },
  { title: "FJD", name: "Fiji Dollar", country: "Fiji" },
  { title: "FKP", name: "Falkland Islands Pound", country: "Falkland Islands" },
  { title: "FOK", name: "Faroese Króna", country: "Faroe Islands" },
  { title: "GBP", name: "Pound Sterling", country: "United Kingdom" },
  { title: "GEL", name: "Georgian Lari", country: "Georgia" },
  { title: "GGP", name: "Guernsey Pound", country: "Guernsey" },
  { title: "GHS", name: "Ghanaian Cedi", country: "Ghana" },
  { title: "GIP", name: "Gibraltar Pound", country: "Gibraltar" },
  { title: "GMD", name: "Gambian Dalasi", country: "The Gambia" },
  { title: "GNF", name: "Guinean Franc", country: "Guinea" },
  { title: "GTQ", name: "Guatemalan Quetzal", country: "Guatemala" },
  { title: "GYD", name: "Guyanese Dollar", country: "Guyana" },
  { title: "HKD", name: "Hong Kong Dollar", country: "Hong Kong" },
  { title: "HNL", name: "Honduran Lempira", country: "Honduras" },
  { title: "HRK", name: "Croatian Kuna", country: "Croatia" },
  { title: "HTG", name: "Haitian Gourde", country: "Haiti" },
  { title: "HUF", name: "Hungarian Forint", country: "Hungary" },
  { title: "IDR", name: "Indonesian Rupiah", country: "Indonesia" },
  { title: "ILS", name: "Israeli New Shekel", country: "Israel" },
  { title: "IMP", name: "Manx Pound", country: "Isle of Man" },
  { title: "INR", name: "Indian Rupee", country: "India" },
  { title: "IQD", name: "Iraqi Dinar", country: "Iraq" },
  { title: "IRR", name: "Iranian Rial", country: "Iran" },
  { title: "ISK", name: "Icelandic Króna", country: "Iceland" },
  { title: "JEP", name: "Jersey Pound", country: "Jersey" },
  { title: "JMD", name: "Jamaican Dollar", country: "Jamaica" },
  { title: "JOD", name: "Jordanian Dinar", country: "Jordan" },
  { title: "JPY", name: "Japanese Yen", country: "Japan" },
  { title: "KES", name: "Kenyan Shilling", country: "Kenya" },
  { title: "KGS", name: "Kyrgyzstani Som", country: "Kyrgyzstan" },
  { title: "KHR", name: "Cambodian Riel", country: "Cambodia" },
  { title: "KID", name: "Kiribati Dollar", country: "Kiribati" },
  { title: "KMF", name: "Comorian Franc", country: "Comoros" },
  { title: "KRW", name: "South Korean Won", country: "South Korea" },
  { title: "KWD", name: "Kuwaiti Dinar", country: "Kuwait" },
  { title: "KYD", name: "Cayman Islands Dollar", country: "Cayman Islands" },
  { title: "KZT", name: "Kazakhstani Tenge", country: "Kazakhstan" },
  { title: "LAK", name: "Lao Kip", country: "Laos" },
  { title: "LBP", name: "Lebanese Pound", country: "Lebanon" },
  { title: "LKR", name: "Sri Lanka Rupee", country: "Sri Lanka" },
  { title: "LRD", name: "Liberian Dollar", country: "Liberia" },
  { title: "LSL", name: "Lesotho Loti", country: "Lesotho" },
  { title: "LYD", name: "Libyan Dinar", country: "Libya" },
  { title: "MAD", name: "Moroccan Dirham", country: "Morocco" },
  { title: "MDL", name: "Moldovan Leu", country: "Moldova" },
  { title: "MGA", name: "Malagasy Ariary", country: "Madagascar" },
  { title: "MKD", name: "Macedonian Denar", country: "North Macedonia" },
  { title: "MMK", name: "Burmese Kyat", country: "Myanmar" },
  { title: "MNT", name: "Mongolian Tögrög", country: "Mongolia" },
  { title: "MOP", name: "Macanese Pataca", country: "Macau" },
  { title: "MRU", name: "Mauritanian Ouguiya", country: "Mauritania" },
  { title: "MUR", name: "Mauritian Rupee", country: "Mauritius" },
  { title: "MVR", name: "Maldivian Rufiyaa", country: "Maldives" },
  { title: "MWK", name: "Malawian Kwacha", country: "Malawi" },
  { title: "MXN", name: "Mexican Peso", country: "Mexico" },
  { title: "MYR", name: "Malaysian Ringgit", country: "Malaysia" },
  { title: "MZN", name: "Mozambican Metical", country: "Mozambique" },
  { title: "NAD", name: "Namibian Dollar", country: "Namibia" },
  { title: "NGN", name: "Nigerian Naira", country: "Nigeria" },
  { title: "NIO", name: "Nicaraguan Córdoba", country: "Nicaragua" },
  { title: "NOK", name: "Norwegian Krone", country: "Norway" },
  { title: "NPR", name: "Nepalese Rupee", country: "Nepal" },
  { title: "NZD", name: "New Zealand Dollar", country: "New Zealand" },
  { title: "OMR", name: "Omani Rial", country: "Oman" },
  { title: "PAB", name: "Panamanian Balboa", country: "Panama" },
  { title: "PEN", name: "Peruvian Sol", country: "Peru" },
  { title: "PGK", name: "Papua New Guinean Kina", country: "Papua New Guinea" },
  { title: "PHP", name: "Philippine Peso", country: "Philippines" },
  { title: "PKR", name: "Pakistani Rupee", country: "Pakistan" },
  { title: "PLN", name: "Polish Złoty", country: "Poland" },
  { title: "PYG", name: "Paraguayan Guaraní", country: "Paraguay" },
  { title: "QAR", name: "Qatari Riyal", country: "Qatar" },
  { title: "RON", name: "Romanian Leu", country: "Romania" },
  { title: "RSD", name: "Serbian Dinar", country: "Serbia" },
  { title: "RUB", name: "Russian Ruble", country: "Russia" },
  { title: "RWF", name: "Rwandan Franc", country: "Rwanda" },
  { title: "SAR", name: "Saudi Riyal", country: "Saudi Arabia" },
  { title: "SBD", name: "Solomon Islands Dollar", country: "Solomon Islands" },
  { title: "SCR", name: "Seychellois Rupee", country: "Seychelles" },
  { title: "SDG", name: "Sudanese Pound", country: "Sudan" },
  { title: "SEK", name: "Swedish Krona", country: "Sweden" },
  { title: "SGD", name: "Singapore Dollar", country: "Singapore" },
  { title: "SHP", name: "Saint Helena Pound", country: "Saint Helena" },
  { title: "SLL", name: "Sierra Leonean Leone", country: "Sierra Leone" },
  { title: "SOS", name: "Somali Shilling", country: "Somalia" },
  { title: "SRD", name: "Surinamese Dollar", country: "Suriname" },
  { title: "SSP", name: "South Sudanese Pound", country: "South Sudan" },
  {
    title: "STN",
    name: "São Tomé and Príncipe Dobra",
    country: "São Tomé and Príncipe",
  },
  { title: "SYP", name: "Syrian Pound", country: "Syria" },
  { title: "SZL", name: "Eswatini Lilangeni", country: "Eswatini" },
  { title: "THB", name: "Thai Baht", country: "Thailand" },
  { title: "TJS", name: "Tajikistani Somoni", country: "Tajikistan" },
  { title: "TMT", name: "Turkmenistan Manat", country: "Turkmenistan" },
  { title: "TND", name: "Tunisian Dinar", country: "Tunisia" },
  { title: "TOP", name: "Tongan Paʻanga", country: "Tonga" },
  { title: "TRY", name: "Turkish Lira", country: "Turkey" },
  {
    title: "TTD",
    name: "Trinidad and Tobago Dollar",
    country: "Trinidad and Tobago",
  },
  { title: "TVD", name: "Tuvaluan Dollar", country: "Tuvalu" },
  { title: "TWD", name: "New Taiwan Dollar", country: "Taiwan" },
  { title: "TZS", name: "Tanzanian Shilling", country: "Tanzania" },
  { title: "UAH", name: "Ukrainian Hryvnia", country: "Ukraine" },
  { title: "UGX", name: "Ugandan Shilling", country: "Uganda" },
  { title: "USD", name: "United States Dollar", country: "United States" },
  { title: "UYU", name: "Uruguayan Peso", country: "Uruguay" },
  { title: "UZS", name: "Uzbekistani So'm", country: "Uzbekistan" },
  { title: "VES", name: "Venezuelan Bolívar Soberano", country: "Venezuela" },
  { title: "VND", name: "Vietnamese Đồng", country: "Vietnam" },
  { title: "VUV", name: "Vanuatu Vatu", country: "Vanuatu" },
  { title: "WST", name: "Samoan Tālā", country: "Samoa" },
  { title: "XAF", name: "Central African CFA Franc", country: "CEMAC" },
  {
    title: "XCD",
    name: "East Caribbean Dollar",
    country: "Organisation of Eastern Caribbean States",
  },
  {
    title: "XDR",
    name: "Special Drawing Rights",
    country: "International Monetary Fund",
  },
  { title: "XOF", name: "West African CFA franc", country: "CFA" },
  { title: "XPF", name: "CFP Franc", country: "Collectivités d'Outre-Mer" },
  { title: "YER", name: "Yemeni Rial", country: "Yemen" },
  { title: "ZAR", name: "South African Rand", country: "South Africa" },
  { title: "ZMW", name: "Zambian Kwacha", country: "Zambia" },
  { title: "ZWL", name: "Zimbabwean Dollar", country: "Zimbabwe" },
];

export default currencies;
