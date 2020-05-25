import { initStore } from './store';

const configureStore = () => {
    const actions = {};

    initStore(actions, {
        members: [
            {
                id: 1,
                name: "MELISSA LECLAIR, CEO",
                bio: "Melissa is our design director, business manager, chief mentor, and somehow also a mom to two amazing and busy kids. She gained experience in the interiors industry managing a local paint and decor shop before taking a big risk and starting a small decorating business with her husband in 2011. Since that time, the little spare-bedroom business has grown into an internationally recognized name in the industry, with a polished but approachable signature aesthetic that draws in clients of all kinds from Ottawa and beyond. Mel now serves primarily as our managing director, overseeing all of Leclair Decor’s design projects and working closely with the team to create and deliver amazing spaces. \n \n In her spare time, she makes it a priority to unplug and get outside with her husband and kiddos, Hugo and Evelyn. She loves supporting other local businesses, exploring the city, and hiking with her family.",
                img: '1.jpg',
                alt: '',
            },
            {
                id: 2,
                name: "SACHA LECLAIR, CREATIVE DIRECTOR",
                bio: "Sacha was born and raised in Ottawa, working in creative fields before starting Leclair Decor with Melissa in 2011. In the beginning, when it was just the two of them, they did absolutely everything themselves, with Sacha taking a particular interest and lead role on the photography, social media, and marketing side of things. Fun fact: we’ve always done all our photography in house, and Sacha still takes about 99% of the photos you see in our feed and portfolio. Today, he continues to oversee Leclair Decor’s digital footprint while also focusing on innovation and growth for the business overall. A major focus these days is LD Shoppe, which we hope to continue to expand and refine in order to offer a curated online collection of our favourite pieces. When he’s not working, Sacha loves being a dad to Hugo and Evelyn, getting outside, travelling, hiking, skiing, and taking photos (of stuff that isn’t rooms).",
                img: '2.jpg',
                alt: '',
            },
            {
                id: 3,
                name: "GRACE DOYLE, DESIGN MANAGER",
                bio: "Grace is the definition of creative and spirited… although that could just be the coffee!? She loves a good joke and keeps us laughing, but make no mistake: she takes her work extremely seriously and is a driving force on our team. She first came to us as an intern and we were so impressed with her natural talent and drive that we offered her a spot on our team as employee 001. Since that time, Grace has seen and been a part of much of our company’s growth. She’s blossomed professionally and is excelling as our most senior designer, leading some of our largest projects both in town and out of province. Her new role as Design Manager now has her guiding our team in all the right directions!",
                img: '3.jpg',
                alt: '',
            },
            {
                id: 4,
                name: "MARCELA GUTIERREZ, DESIGNER",
                bio: "Marcela is a Colombian born, Vancouver educated, and Ottawa landed designer. She graduated with a BA in industrial design from Emily Carr University in 2015 before making the cross-country journey to the capital with her husband. Marcela is one of those people who literally everybody likes, but don’t let her sweet demeanour fool you: she is a total pro and diehard details girl. She has quickly risen to the role of Senior Designer, thanks to her passion and killer work ethic. Her other interests include sewing, product design, and exploring with her husband and daughter on weekends.",
                img: '4.jpg',
                alt: '',
            },
            {
                id: 5,
                name: "MARILYNE PERRIER, DESIGNER",
                bio: "Marilyne was born and raised in a small town called Hammond, and grew up on a hobby farm ‘with a million animals.’ She studied interior design La Cité Collegiale with a focus on commercial projects, which is evident in her knack for spatial planning and highly functional design. In an industry where new challenges come up daily, this is the kind of girl you want in your corner. She is task-oriented and always on the ball, but also effortlessly calm and collected, and loves a challenging space because it calls for creativity. In her time off, Marilyne likes to relax, take it easy, and occasionally indulge in a yoga or kickboxing session.",
                img: '5.jpg',
                alt: '',
            },
            {
                id: 6,
                name: "EVE CHARBONNEAU, DESIGNER",
                bio: "Eve was raised in a converted four-story silo home just outside of Ottawa, so naturally, she’s passionate about sustainable and innovative design. She worked with us first as an intern while completing her interior decorating diploma at La Cité Collegiale, before branching out elsewhere to her first jobs in the industry. Some things are meant to be, though, and now she’s back with us full time and quickly establishing herself as a key member of our design team. Eve is hard-working with a sharp eye for a relaxed modern aesthetic. When she’s off the clock, you can find her travelling the world, collecting treasures, and daydreaming about a modern barn home she can call her own one day.",
                img: '6.jpg',
                alt: '',
            },
            {
                id: 7,
                name: "MEREDITH BANGAY, DESIGNER",
                bio: "A diverse designer, Meredith studied graphic design at NSCAD University in Halifax and interior design at Dawson College in Montreal and came to us with significant experience in the design world. While she spent the majority of her career working as art director of a Canadian-based publishing firm, she recently leaped back into interiors (and to Ontario!). Her keen eye and attention to detail have proven to be a major asset to our design team. In her spare time, Meredith can be found enjoying the outdoors or travelling to faraway lands. Most recently, she can be found at the beach or the dog park with her dog, Otis.",
                img: '7.jpg',
                alt: '',
            }
        ],
    });
};

export default configureStore;
