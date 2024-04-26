{\rtf1\ansi\ansicpg1252\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function showTraining(trainingId) \{\
    const details = document.getElementById('details');\
    switch(trainingId) \{\
        case 'trening1':\
            details.textContent = 'Trening 1: 10x Sklekovi, 15x \uc0\u268 u\u269 njevi, 5x Zgibovi';\
            break;\
        case 'trening2':\
            details.textContent = 'Trening 2: 20x Sklekovi, 25x \uc0\u268 u\u269 njevi, 10x Zgibovi';\
            break;\
        case 'trening3':\
            details.textContent = 'Trening 3: 30x Sklekovi, 35x \uc0\u268 u\u269 njevi, 15x Zgibovi';\
            break;\
        default:\
            details.textContent = 'Izaberite trening iz menija.';\
    \}\
\}\
}