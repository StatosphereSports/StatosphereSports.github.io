var trace1 = {
  x: [0.34439953132469309,
 -14.115459306702926,
 -10.822464248785153,
 4.1471491613705433,
 1.1804790108856396,
 -2.9534380751552201,
 5.6943813732282411,
 12.245741912683565,
 -17.674612798979712,
 6.3404339345621441,
 3.1839581802648258,
 2.8942836080664125,
 10.151879160213266,
 8.4825827061929306,
 -7.6062924475435088,
 14.77248449176423,
 6.042705419022294,
 -3.2188090428867087],

  y: [-0.72439160806786917,
 -3.3460234033729588,
 -15.857144270609206,
 9.2184296387697771,
 -2.6362477866205745,
 -6.8038513416720274,
 1.6963618127494182,
 2.7690174305614117,
 -20.116765344593677,
 -1.5052752148056268,
 13.331870402159424,
 3.520570915876192,
 2.7581698221794371,
 7.8900618894152803,
 -7.9952485416040622,
 3.4192771914123634,
 5.8170030679229345,
 -10.512776441305377],
  mode: 'markers',
  type: 'scatter',
  name: 'Ratings',
  text: [u'Adelaide',
 u'Brisbane Lions',
 u'Carlton',
 u'Collingwood',
 u'Essendon',
 u'Fremantle',
 u'GW Sydney',
 u'Geelong',
 u'Gold Coast',
 u'Hawthorn',
 u'Melbourne',
 u'North Melbourne',
 u'Port Adelaide',
 u'Richmond',
 u'St Kilda',
 u'Sydney',
 u'West Coast',
 u'Western Bulldogs'],
  marker: { size: 12 }
};


var data = [ trace1 ];

var layout = {
  xaxis: {
    range: [ -25.0, 25.0 ]
  },
  yaxis: {
    range: [-25.0, 25.0]
  },
  title:'Data Labels Hover'
};

Plotly.newPlot('myDiv', data, layout);