$(document).foundation()
const geoMarks = {
  "Lleida": [
    {
      "position": "41.6166541,0.6206359",
      "title": "<b>Epap Bar</b><hr /><b>Carrer Panera, 5, 25002 Lleida</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.6166541,0.6206359\">Obrir a Google Maps</a>"
    },
      {
      "title": "<b>Ateneu La Baula</b><hr /><b>Carrer del Nord, 4, 25007. LLeida</b><br />De dilluns a divendres<br />De 9.00 a 23.00<br />Dissabtes de 12.00 a 23.00<br />Diumenge tancat<br /><a target=_blank href=\"https://maps.google.com/maps/search/Ateneu La Baula/@41.6188116,0.6301967\">Obrir a Google Maps</a>",
      "position": "41.6188116,0.6301967"
    }
       ,
      {
      "position": "41.6473494,1.1376317",
      "title": "<b>El laberint</b><hr /><b>Carrer del Carme, Tàrrega</b><br />De dimecres 20 a divendres 22<br />De 10 a 12h i de 17 a 20h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.6473494,1.1376317\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.6140895,0.6243216",
      "title": "<b>Paradeta al carrer</b><hr /><b>PLaça Sant Francesc, Lleida</b><br />De dimecres 20 a divendres 22<br />De 18 a 20h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.6140895,0.6243216\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.631193,0.8901493",
      "title": "<b>Casal Popular l'Arreu</b><hr /><b>Carrer del Palau, 34, 25230 Mollerussa</b><br />Divendres 22<br />De 18 a 20:30h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.631193,0.8901493\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.6692465,1.2716837",
      "title": "<b>Pub La Bombolla</b><hr /><b>Rambla de Lluís Sanpere, 22, 25200 Cervera</b><br />De dimecres 20 a divendres 22<br />De 15 a 03h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.6692465,1.2716837\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.7898371,0.8060256",
      "title": "<b>Bar La Rosaleda</b><hr /><b>Plaça Pau Casals 1</b><br />De dimecres 20 a divendres 22<br />De 07 a 00h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.7898371,0.8060256\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.52137,0.8675313",
      "title": "<b>Cerveseria O'Brothers</b><hr /><b>Carrer del Marquès d'Olivart 30</b><br />De dimecres 20 a divendres 22<br />De 10 a 12h i de 17 a 20h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.52137,0.8675313\">Obrir a Google Maps</a>"
    }
  ],
  "Barcelona": [

    {
      "position": "41.4350282,2.1682971",
      "title": "<b>Casal Tres Voltes Rebel</b><hr /><b>Passeig d'Urrutia, 125. 08042 Barcelona</b><br />De dilluns a divendres de 17.30 a 21.00.<br /><a target=_blank href=\"https://maps.google.com/maps/search/Casal Tres Voltes Rebel/@41.4350282,2.1682971\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.565497,2.0180183",
      "title": "<b>Botiga de Cultiu L'Aglà</b><hr /><b>Carrer Salmeron 66, Baixos, 08222 Terrassa</b><br />Matins de 11.00 a 14.00<br />Tardes de 17.00 a 20.30<br />Dilluns matí tancat.<br /><a target=_blank href=\"https://maps.google.com/maps/search/Botiga de Cultiu L'Aglà/@41.565497,2.0180183\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.3664528,2.1256128",
      "title": "<b>Ateneu Popular i Independentista La Iaia</b><hr /><b>Carrer Jacint Verdaguer, 14, 08902. Hospitalet de Llobregat</b><br />De dilluns a dissabte<br />Desde les 18.00 a 21.00<br />Diumenge tancat<br /><a target=_blank href=\"https://maps.google.com/maps/search/Ateneu Popular i Independentista La Iaia/@41.3664528,2.1256128\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.3780543,2.1413874",
      "title": "<b>Espai Basset</b><hr /><b> Carrer de l'Elisi 20 de Barcelona</b><br />Obert de Dilluns a Dissabte<br />Només tardes de 18.00 a 21.00<br /><a target=_blank href=\"https://maps.google.com/maps/search/Espai Basset/@41.378068,2.1413302\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.4501532,2.2452182",
      "title": "<b>Paradeta CDR</b><hr /><b>Plaça de la Vila, Badalona</b><br />Dilluns de 19h a 20.30h (paradeta CDR)<br /><a target=_blank href=\"https://maps.google.com/maps/search/Paradeta CDR/@41.4501532,2.2452182\">Obrir a Google Maps</a>"
    },
      {
      "position": "41.4472827,2.2423045",
      "title": "<b>Casal Antoni Sala i Pont</b><hr /><b>C/Colom, 66 - Badalona</b><br />Obert de Dilluns a Divendres<br />Matins de 10.00 a 14.00<br />Tardes de 16.00 a 19.30<br /><a target=_blank href=\"https://maps.google.com/maps/search/Casal Antoni Sala i Pont/@41.4472827,2.2423045\">Obrir a Google Maps</a>"
    },
      {
      "position": "41.579672,2.5509549",
      "title": "<b>Merceria La Troca</b><hr /><b>Riera Bisbe Pol 116, Arenys de Mar</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/\@41.579672,2.5509549\">Obrir a Google Maps</a>"
    },
      {
      "position": "41.5348421,2.2150054",
      "title": "<b>Casal Popular El Tabaran</b><hr /><b>Carrer de Berenguer III, 162, Mollet del Vallès</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/\@41.5350482,2.215424\">Obrir a Google Maps</a>"
    },
     {
      "position": "42.011146,2.0266423",
      "title": "<b>Taverna El Caminet</b><hr /><b>Carrer Bruc, 35, Prats de Lluçanès</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/\@42.011146,2.0266423\">Obrir a Google Maps</a>"
    },
       {
      "position": "41.4932188,2.1346183",
      "title": "<b>Local Compromís per Cerdanyola</b><hr /><b>C/ Pintor Togores 42, Cerdanyola del Vallès</b><br />Si noo està obert, es poden deixar a la bústia amb el logo de CxC<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.4932188,2.1346183\">Obrir a Google Maps</a>"
    },

     {
      "position": "41.4915989,2.1379718",
      "title": "<b>Plaça Abat Oliva</b><hr /><b>Cerdanyola del Vallès</b><br />De dilluns a dijous, de 10 a 2 hores i de 16 a 18 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.4915989,2.1379718\">Obrir a Google Maps</a>"
    }
      ,

     {
      "position": "41.5721014,2.2293384",
      "title": "<b>Perruqueria Rínxols</b><hr /><b>Av. Lluís Companys, 25, Parets del Vallès</b><br />De 9:30 a 13 hores, i de 15 a 19 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.5721014,2.2293384\">Obrir a Google Maps</a>"
    },
      {
      "position": "41.5374676,2.1168129",
      "title": "<b>Centre Cívic Sant Oleguer</b><hr /><b>Carrer de Sol i Padrís 93, Sabadell</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/\@41.5374676,2.1168129\">Obrir a Google Maps</a>"
    },
      {
      "position": "41.7300081,1.8177942",
      "title": "<b>Espai CAT</b><hr /><b>Carrer de Lleida 10, Manresa</b><br />De 9 a 19 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.7300081,1.8177942\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.6277907,2.6885451",
      "title": "<b>Casal Joan Roig</b><hr /><b>Carreró de la Plaça 25, 08397 Pineda de Mar</b><br />De 18 a 23 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.6277907,2.6885451\">Obrir a Google Maps</a>"
    },
      {
      "position": "41.6441645,2.7413412",
      "title": "<b>Ateneu El Rovell</b><hr /><b>Carrer de Mar, 77, 08380 Malgrat de Mar</b><br />De 10 a 13 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.6441645,2.7413412\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.6130637,2.6572868",
      "title": "<b>Cafeteria Casa Granell</b><hr /><b>Carrer de Jovara, 121, 08370 Calella</b><br />De 8 a 22 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.6130637,2.6572868\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.6162511,2.6582127",
      "title": "<b>La Tasca de la Vasca</b><hr /><b>Carrer de Sant Jaume, 130, 08370 Calella</b><br />De 9 a 16 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.6162511,2.6582127\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.6163,2.0852613",
      "title": "<b>Mercat municipal de Castellar del Vallès</b><hr /><b>Plaça Major, s/n, 08211 Castellar del Vallès</b><br />Divendres 22<br />De 17:30 a 19:30 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.6163,2.0852613\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.3860019,2.1801606",
      "title": "<b>Ciutat Vella</b><hr /><b>Carrer del Rec 27, Barcelona</b><br />Dimecres 20<br />De 18 a 20 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.3860019,2.1801606\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.4240992,2.1761648",
      "title": "<b>Metro Maragall</b><hr /><b>Cantonada Passeig Maragall amb C/ Ramon Albó</b><br />Dimecres 20<br />De 18 a 20 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.4240992,2.1761648\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.4038523,2.1912656",
      "title": "<b>UPF Campus Poblenou</b><hr /><b>C/ Roc Boronat 138</b><br />Dimecres 20 i dijous 21<br />De 9 a 19 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.4038523,2.1912656\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.3759033,2.1333072",
      "title": "<b>Plaça de Sants</b><hr /><b>Plaça de Sants</b><br />Dimecres 20<br />A partir de les 17h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.3759033,2.1333072\">Obrir a Google Maps</a>"
    }
,
      {
      "position": "41.4055249,2.1598677",
      "title": "<b>Metro Joanic</b><hr /><b>Plaça Joanic</b><br />Divendres 22<br />De 17 a 20h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.4055249,2.1598677\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.544,1.8895811",
      "title": "<b>Olesa de Montserrat</b><hr /><b>Carrer de Salvador Casas</b><br />Dimecres 20 i dijous 21<br />De 10 a 12h i de 18 a 20h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.544,1.8895811\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.5413137,1.8926317",
      "title": "<b>Olesa de Montserrat</b><hr /><b>Rambla Catalunya</b><br />Divendres 22<br />De 10 a 12h i de 18 a 20h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.5413137,1.8926317\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.4273326,2.1616258",
      "title": "<b>Centre Kiddo</b><hr /><b>Carrer de Peris i Mencheta, 9, 08032 Barcelona</b><br />Dijous 21 i divendres 22<br />De 9:30 a 18h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.4273326,2.1616258\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.5415582,2.4432095",
      "title": "<b>Casal de la Nova Aliança</b><hr /><b>Carrer Bonaire, 25, 08301 Mataró</b><br />De 17 a 22h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.5415582,2.4432095\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.5052808,2.3436674",
      "title": "<b>Premià de Dalt</b><hr /><b>Carretera d'enllaç 46, Premià de Dalt</b><br />Dimecres 20, de 18 a 20h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.5052808,2.3436674\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.42952,2.1597533",
      "title": "<b>Horta-Guinardó</b><hr /><b>Carrer del Tajo 37, Barcelona</b><br />Dijous 21, de 18 a 20h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.42952,2.1597533\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.4452054,2.1797783",
      "title": "<b>Teràpies Bea</b><hr /><b>Carrer del Molí 98, HOrta Guinardó</b><br />Divendres 22 de 14:30 a 22h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.4452054,2.1797783\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.3839867,2.1275687",
      "title": "<b>Mercat de Les Corts</b><hr /><b>Travessera de les Corts, 215, Barcelona</b><br />Dissabte 23 de 11 a 14h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.3839867,2.1275687\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.3749386,2.1416967",
      "title": "<b>Mercat d'Hostafrancs'</b><hr /><b>Carrer de la Creu Coberta 93, Barcelona</b><br />Dissabte 23 de 11 a 14h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.3749386,2.1416967\">Obrir a Google Maps</a>"
    }
      ,
      {
      "position": "41.4233664,2.1785277",
      "title": "<b>MOLSA</b><hr /><b>Carrer de Garcilaso 191</b><br />De 10 a 14h i de 17 a 20h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.4233664,2.1785277\">Obrir a Google Maps</a>"
    }

  ],
  "Girona": [
        {
      "position": "41.984106,2.8226217",
      "title": "<b>La Pedra</b><hr /><b>Carrer dels Mercaders, 18, 17004 Girona</b><br />19:00 - 00:00 (de dimarts a dissabte)<br /><a target=_blank href=\"https://maps.google.com/maps/search/La Pedra/@41.984106,2.8226217\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.9896027,2.8230739",
      "title": "<b>El Forn</b><hr /><b>Plaça de Sant Pere, 5, 17007 Girona</b><br />19:00 - 00:00 (de dimarts a divendres)<br />12:00 - 00:00 (dissabte)<br /><a target=_blank href=\"https://maps.google.com/maps/search/El Forn/@41.9896027,2.8230739\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.9829942,2.8224718",
      "title": "<b>Llibreria les Voltes</b><hr /><b>Plaça del Vi, 2, 17004 Girona</b><br />09:00 - 14:00 i 16:00 - 20:00 (de dilluns a divendres)<br />10:00 - 14:00 i 16:00 - 20:00 (dissabte)<br />10:00 - 14:00 (diumenge)<br /><a target=_blank href=\"https://maps.google.com/maps/search/Llibreria les Voltes/@41.9829942,2.8224718\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.9563633,2.6348814",
      "title": "<b>Bar la república</b><hr /><b>Plaça catalunya, 11, Girona</b><br />Anglès<br />Tots els dies de 09:00 a 24:00<br /><a target=_blank href=\"https://maps.google.com/maps/search/Bar la república/@41.9563633,2.6348814\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.9558196,2.6353911",
      "title": "<b>Llibreria Nati</b><hr /><b>Indústria 22, Girona</b><br />Anglès<br />Matins de 9.00 a 1.00<br />Tardes de 5.00 a 7.00<br /><a target=_blank href=\"https://maps.google.com/maps/search/Llibreria Nati/@41.9558196,2.6353911\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.8636125,2.6604282",
      "title": "<b>Estanc Can Net</b><hr /><b>Plaça Farners. Santa Coloma de Farners</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/Estanc Can Net/@41.8636125,2.6604282\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.7393455,2.884346",
      "title": "<b>Paradeta al Mercat Setmanal</b><hr /><b>Mercat Setmanal de Tossa de Mar, Girona</b><br />Dijous matí<br /><a target=_blank href=\"https://maps.google.com/maps/search/Paradeta al Mercat Setmanal/@41.7393455,2.884346\">Obrir a Google Maps</a>"
    },
    {
      "position": "41.9595699,3.0363085",
      "title": "<b>Ca La Pilar Dumingu</b><hr /><b>Plaça Major, 12, La Bisbal d'Empordà</b><br />Obert de Dimarts a Dissabte<br />Desde les 9.00 fins les 00.00<br /><a target=_blank href=\"https://maps.google.com/maps/search/Ca La Pilar Dumingu/@41.9595699,3.0363085\">Obrir a Google Maps</a>"
    },
    {
      "position": "42.2682984,2.9545769",
      "title": "<b>Bar La Cate</b><hr /><b>Ronda Rector Aroles, 4. Figueres</b><br />https://barlacate.cat<br /><a target=_blank href=\"https://maps.google.com/maps/search/Bar La Cate/@42.2682984,2.9545769\">Obrir a Google Maps</a>"
    }
      ,
    {
      "position": "42.02619,2.8760843",
      "title": "<b>Teatre l'Ateneu</b><hr /><b>Plaça Estatut, 1, 17460 Celrà</b><br />Dimecres 20 i dijous 21<br />De 19 a 21 h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@42.02619,2.8760843\">Obrir a Google Maps</a>"
    }
      ,
    {
      "position": "42.1815704,2.485006",
      "title": "<b>Carrer de St Rafael</b><hr /><b>Olot</b><br />Dimecres 20, de 11 a 13h, i de 15 a 17:30h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@42.1815704,2.485006\">Obrir a Google Maps</a>"
    }
      ,
    {
      "position": "42.1815704,2.485006",
      "title": "<b>Carrer de St Rafael</b><hr /><b>Olot</b><br />Dimecres 20, de 11 a 13h, i de 15 a 17:30h<br /><a target=_blank href=\"https://maps.google.com/maps/search/@42.1815704,2.485006\">Obrir a Google Maps</a>"
    }
  ],
    "Tarragona":[
        {
      "position": "41.230075,0.5486593",
      "title": "<b>Cerveseria Dresden</b><hr /><b>Av. de Catalunya, 16, Flix</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/\@41.230075,0.5486593\">Obrir a Google Maps</a>"
    },
     {
      "position": "40.5986482,0.4428078",
      "title": "<b>Pub Glops</b><hr /><b>Carrer Guifré, 26, Ulldecona</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/\@40.5986482,0.4428078\">Obrir a Google Maps</a>"
    },


    {
      "position": "41.12106,1.2506506",
      "title": "<b>Fruites i verdures Ton</b><hr /><b>Carrer de Florenci Vives 6, Tarragona</b><br />De 9:30 a 13 hores, i de 15 a 19 hores<br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.12106,1.2506506\">Obrir a Google Maps</a>"
    },
        {
      "position": "41.1560786,1.1073192",
      "title": "<b>Bar Teina</b><hr /><b>Plaça de la Farinera, 7, 43201 Reus</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.1560786,1.1073192\">Obrir a Google Maps</a>"
    },
         {
      "position": "41.155757,1.1073172",
      "title": "<b>Parit aquí. Botiga de roba</b><hr /><b>Carrer de Santa Anna, 7, 43201 Reus</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.155757,1.1073172\">Obrir a Google Maps</a>"
    },
        {
      "position": "41.1447592,1.4018252",
      "title": "<b>Llibreria Miquel</b><hr /><b>Carrer de Pere Badia 43, 43830 Torredembarra</b><br /><a target=_blank href=\"https://maps.google.com/maps/search/@41.1447592,1.4018252\">Obrir a Google Maps</a>"
    }
    ]
};

$('input#botoEnvia').click( function() {
    $.post( 'http://canpineda.cat/mailer_fr.php', $('form#mailvoluntaris').serialize(), function(data) {
         alert(data);
       });
});
