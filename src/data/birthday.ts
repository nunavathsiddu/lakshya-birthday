import { BirthdayConfig, BirthdayImages } from "@/types";

/**
 * ==============================================================================
 * CENTRAL BIRTHDAY EXPERIENCE CONFIGURATION FOR LAKSHYA
 * ==============================================================================
 *
 * Customize EVERYTHING on the website from this single file.
 *
 * PHOTO INSTRUCTIONS:
 * 1. Place all your photos inside `/public/images/`
 * 2. Supported filenames (all controlled below):
 *    - /images/hero.jpg          -> Main cinematic hero shot of Lakshya
 *    - /images/lakshya.jpg       -> Beautiful portrait dedicated to her name
 *    - /images/couple-01.jpg     -> The first memory / early days
 *    - /images/couple-02.jpg     -> Mid-timeline favorite memory
 *    - /images/couple-03.jpg     -> Recent favorite romantic memory
 *    - /images/couple-04.jpg     -> Walking hand in hand
 *    - /images/couple-05.jpg     -> Quiet morning embrace
 *    - /images/memory-01.jpg     -> Gallery photo 1 (Sunset / Golden hour)
 *    - /images/memory-02.jpg     -> Gallery photo 2 (Spontaneous laughter)
 *    - /images/memory-03.jpg     -> Gallery photo 3 (Special trip / adventure)
 *    - /images/memory-04.jpg     -> Gallery photo 4 (Quiet coffee date / rainy day)
 *    - /images/memory-05.jpg     -> Gallery photo 5 (Dressed up celebration)
 *    - /images/memory-06.jpg     -> Gallery photo 6 (Her pure candid smile)
 *    - /images/memory-07.jpg     -> Gallery photo 7 (Ocean breeze & warm sand)
 *    - /images/memory-08.jpg     -> Gallery photo 8 (Under the autumn canopy)
 *    - /images/memory-09.jpg     -> Gallery photo 9 (Cozy bookstore hideaway)
 *    - /images/memory-10.jpg     -> Gallery photo 10 (Dessert date whispers)
 *    - /images/memory-11.jpg     -> Gallery photo 11 (Fairy lights at midnight)
 *    - /images/memory-12.jpg     -> Gallery photo 12 (Mountain vista lookout)
 *    - /images/memory-13.jpg     -> Gallery photo 13 (Spontaneous dancing in rain)
 *    - /images/memory-14.jpg     -> Gallery photo 14 (Twilight rooftop whispers)
 *    - /images/memory-15.jpg     -> Gallery photo 15 (Lakshya birthday toast)
 *
 * AUDIO INSTRUCTIONS:
 * 1. Place your favorite song as an MP3 file at `/public/audio/song.mp3`.
 * 2. If no MP3 is found, the built-in ambient piano synthesizer will automatically
 *    play a warm, romantic melody so the site is never silent!
 * ==============================================================================
 */

export const IMAGES: BirthdayImages = {
  hero: "/images/hero.jpg",
  lakshya: "/images/lakshya.jpg",
  couple01: "/images/couple-01.jpg",
  couple02: "/images/couple-02.jpg",
  couple03: "/images/couple-03.jpg",
  couple04: "/images/couple-04.jpg",
  couple05: "/images/couple-05.jpg",
  memory01: "/images/memory-01.jpg",
  memory02: "/images/memory-02.jpg",
  memory03: "/images/memory-03.jpg",
  memory04: "/images/memory-04.jpg",
  memory05: "/images/memory-05.jpg",
  memory06: "/images/memory-06.jpg",
  memory07: "/images/memory-07.jpg",
  memory08: "/images/memory-08.jpg",
  memory09: "/images/memory-09.jpg",
  memory10: "/images/memory-10.jpg",
  memory11: "/images/memory-11.jpg",
  memory12: "/images/memory-12.jpg",
  memory13: "/images/memory-13.jpg",
  memory14: "/images/memory-14.jpg",
  memory15: "/images/memory-15.jpg",
};

export const BIRTHDAY_DATA: BirthdayConfig = {
  images: IMAGES,

  recipient: {
    name: "Lakshya",
    nickname: "My Love",
    birthDate: "October 23",
    targetMonth: 10, // October (1-indexed)
    targetDay: 23,
    heroGreeting: "To the girl who turned my ordinary world into poetry.",
    meaningOfName: "Aim, Purpose, and Guiding Light",
    nameSubtitle: "Every dream I ever held gently led me straight to you.",
  },

  audio: {
    title: "Golden Hour Symphony",
    artist: "Dedicated to Lakshya",
    src: "/audio/song.mp3",
  },

  secretOpening: {
    eyebrow: "A PRIVATE CELEBRATION",
    teaserTitle: "Someone made something special for you...",
    invitation: "Step into our story",
    subtext: "Best experienced with sound turned on. Take your time scrolling.",
  },

  firstMemory: {
    date: "The Day We First Met",
    location: "That Quiet Corner Where Time Stopped",
    title: "The Moment Everything Shifted",
    story:
      "Before you walked in, the world was just noise and routine. But then you smiled, caught my eyes across the room, and suddenly every clock in the universe felt obsolete. I didn't know then that my whole heart had already chosen you.",
    quote: "“You didn't just enter my life; you gave it warmth and color.”",
    image: IMAGES.couple01,
  },

  timeline: [
    {
      id: "beginning",
      step: "01",
      date: "The Beginning",
      title: "The First Glance",
      subtitle: "When destiny made its first move",
      story:
        "It started with a look that lasted just a few seconds longer than strangers ever look at each other. A sudden stillness in the room, and an electric realization that my tomorrow had just changed forever.",
      quote: "Some people meet by chance; we met because the universe couldn't wait any longer.",
      image: IMAGES.couple01,
      imageAlt: "The beginning of us",
      badge: "Chapter One",
    },
    {
      id: "first-conversation",
      step: "02",
      date: "First Late Night Talk",
      title: "Midnight Confessions",
      subtitle: "When minutes vanished like seconds",
      story:
        "One conversation turned into three hours, which blurred into four in the morning. We talked about silly things, childhood dreams, favorite books, and quiet fears. I hung up realizing I had never felt so understood by anyone in my life.",
      quote: "I didn't fall into conversation with you; I fell into belonging.",
      image: IMAGES.memory01,
      imageAlt: "Late night talks and quiet smiles",
      badge: "Deep Connection",
    },
    {
      id: "first-date",
      step: "03",
      date: "Our First Memory",
      title: "The Day We Knew",
      subtitle: "Underneath an evening that never faded",
      story:
        "The nervous laughs, the gentle brush of fingers across the cafe table, and that moment you tucked your hair behind your ear while laughing at my terrible joke. In that single snapshot, I knew I was completely in love.",
      quote: "There are moments you wish you could frame in gold. This was the first of many.",
      image: IMAGES.couple02,
      imageAlt: "Our first real date",
      badge: "First Date",
    },
    {
      id: "the-moments",
      step: "04",
      date: "Every Season With You",
      title: "The Quiet Adventures",
      subtitle: "Finding paradise in ordinary moments",
      story:
        "From spontaneous long drives with the windows down and our favorite songs blasting, to quiet rainy Sunday afternoons sharing tea and unspoken comfort. With you, every single ordinary day turns into a movie scene.",
      quote: "Paradise isn't a destination. It's wherever you are sitting next to me.",
      image: IMAGES.memory03,
      imageAlt: "Adventures and quiet moments",
      badge: "Adventures",
    },
    {
      id: "today",
      step: "05",
      date: "October 23 — Today",
      title: "Your Special Day",
      subtitle: "The world is brighter because you are in it",
      story:
        "Today we celebrate the day the most radiant, kindhearted, fiercely loving soul was brought into this world. Lakshya, you are my home, my peace, and my greatest blessing. Today is completely yours.",
      quote: "Happy Birthday, my favorite human in the entire universe.",
      image: IMAGES.lakshya,
      imageAlt: "Lakshya celebrating her birthday",
      badge: "Today",
    },
    {
      id: "forever",
      step: "06",
      date: "Tomorrow & Beyond",
      title: "Forever In Progress",
      subtitle: "Only just getting started",
      story:
        "Every chapter behind us has been pure magic, but the pages yet unwritten excite me most. A lifetime of more birthdays, deeper laughs, shared dreams, quiet mornings, and unconditional love.",
      quote: "I have loved you for a thousand moments, and I will love you through a million more.",
      image: IMAGES.couple03,
      imageAlt: "Our forever journey",
      badge: "Eternity",
    },
  ],

  gallery: [
    {
      id: "gal-1",
      image: IMAGES.hero,
      title: "Golden Hour Glow",
      subtitle: "The way the sunlight catches your eyes",
      date: "A Sunny Afternoon",
      tag: "favorites",
      aspectRatio: "portrait",
      note: "You were talking passionately about something you loved, and I was just looking at you in complete awe.",
    },
    {
      id: "gal-2",
      image: IMAGES.lakshya,
      title: "Pure Radiance",
      subtitle: "That effortless elegance you wear naturally",
      date: "Special Evening",
      tag: "candid",
      aspectRatio: "portrait",
      note: "No matter how crowded the room is, my eyes will always find yours.",
    },
    {
      id: "gal-3",
      image: IMAGES.couple01,
      title: "In Your Arms",
      subtitle: "My safest place on earth",
      date: "Weekend Getaway",
      tag: "adventures",
      aspectRatio: "landscape",
      note: "No matter what storms happen outside, being with you feels like arriving safely home.",
    },
    {
      id: "gal-4",
      image: IMAGES.memory02,
      title: "Unfiltered Laughter",
      subtitle: "The sound that melts every worry",
      date: "Random Thursday",
      tag: "candid",
      aspectRatio: "square",
      note: "Your laughter is my favorite soundtrack. I could listen to it on repeat for eternity.",
    },
    {
      id: "gal-5",
      image: IMAGES.memory04,
      title: "Coffee & Quiet Dreams",
      subtitle: "Little mornings of pure peace",
      date: "Sunday Dawn",
      tag: "moments",
      aspectRatio: "portrait",
      note: "Warm cups, chilly air, your hand in mine, whispering plans for the future.",
    },
    {
      id: "gal-6",
      image: IMAGES.couple02,
      title: "Stolen Looks",
      subtitle: "When a single glance says everything",
      date: "City Lights",
      tag: "favorites",
      aspectRatio: "landscape",
      note: "We didn't need words. Just one look and we both started grinning.",
    },
    {
      id: "gal-7",
      image: IMAGES.memory05,
      title: "Dressed in Starlight",
      subtitle: "A night we felt like royalty",
      date: "Celebration Night",
      tag: "adventures",
      aspectRatio: "portrait",
      note: "You took my breath away the moment you stepped out. You truly outshine the stars.",
    },
    {
      id: "gal-8",
      image: IMAGES.memory06,
      title: "The Sweetest Soul",
      subtitle: "Your gentleness and empathy",
      date: "Every Single Day",
      tag: "moments",
      aspectRatio: "square",
      note: "How someone can be so fiercely strong yet so tenderly gentle is a wonder I admire every day.",
    },
    {
      id: "gal-9",
      image: IMAGES.memory07,
      title: "Ocean Breeze & Warm Sand",
      subtitle: "Listening to the waves crash beside you",
      date: "Summer Escape",
      tag: "adventures",
      aspectRatio: "landscape",
      note: "Salt in the air, your hand in mine, and eternity in the horizon.",
    },
    {
      id: "gal-10",
      image: IMAGES.memory08,
      title: "Under Autumn Canopies",
      subtitle: "Golden leaves falling around your smile",
      date: "October Walk",
      tag: "favorites",
      aspectRatio: "portrait",
      note: "My favorite season has always been whatever season you are in.",
    },
    {
      id: "gal-11",
      image: IMAGES.memory09,
      title: "Bookstore Whispers",
      subtitle: "Lost in pages and quiet smiles",
      date: "Rainy Afternoon",
      tag: "moments",
      aspectRatio: "square",
      note: "Watching you browse shelves with quiet curiosity is my favorite poem.",
    },
    {
      id: "gal-12",
      image: IMAGES.memory10,
      title: "Dessert Date Whispers",
      subtitle: "Sweet bites and sweeter conversations",
      date: "Friday Night",
      tag: "candid",
      aspectRatio: "portrait",
      note: "You said you were too full, and then finished all the chocolate cake.",
    },
    {
      id: "gal-13",
      image: IMAGES.memory11,
      title: "Fairy Lights at Midnight",
      subtitle: "When the simplest moments become magic",
      date: "Late Evening",
      tag: "favorites",
      aspectRatio: "landscape",
      note: "Soft yellow lights reflecting in your eyes like miniature galaxies.",
    },
    {
      id: "gal-14",
      image: IMAGES.memory12,
      title: "Mountain Vista Lookout",
      subtitle: "Breathless air and endless horizons",
      date: "High Altitude Journey",
      tag: "adventures",
      aspectRatio: "landscape",
      note: "Standing on top of the world, but the best view was still right beside me.",
    },
    {
      id: "gal-15",
      image: IMAGES.memory13,
      title: "Dancing in Sudden Rain",
      subtitle: "Completely soaked and completely happy",
      date: "Summer Downpour",
      tag: "candid",
      aspectRatio: "portrait",
      note: "No umbrella, no worries, just your infectious laughter echoing down the street.",
    },
    {
      id: "gal-16",
      image: IMAGES.memory14,
      title: "Twilight Rooftop Whispers",
      subtitle: "Watching the city go to sleep together",
      date: "Dusk Hours",
      tag: "moments",
      aspectRatio: "portrait",
      note: "Under the deep velvet blue sky, talking about everything and nothing.",
    },
    {
      id: "gal-17",
      image: IMAGES.memory15,
      title: "The Birthday Toast",
      subtitle: "Celebrating another year of your radiant light",
      date: "October 23 Celebration",
      tag: "favorites",
      aspectRatio: "landscape",
      note: "Here is to you, my love. May every single dream of yours come true.",
    },
    {
      id: "gal-18",
      image: IMAGES.couple04,
      title: "Hand in Hand Forever",
      subtitle: "Our pace, our rhythm, our path",
      date: "Evening Stroll",
      tag: "moments",
      aspectRatio: "portrait",
      note: "My fingers fit perfectly between yours, like they were meant to be there.",
    },
    {
      id: "gal-19",
      image: IMAGES.couple05,
      title: "Quiet Morning Light",
      subtitle: "The softness before the world wakes up",
      date: "Sunday Dawn",
      tag: "favorites",
      aspectRatio: "square",
      note: "Just warm tea, sunlight streaming in, and total peaceful contentment.",
    },
  ],

  reasons: [
    {
      id: 1,
      number: "01",
      title: "Your Infectious Laugh",
      description:
        "The unrestrained, genuine giggle that escapes when something truly catches you off guard. It lights up the entire room and instantly wipes away any trace of stress.",
      tagline: "The melody of my life",
      category: "Joy",
      accentColor: "#F4ACB7",
    },
    {
      id: 2,
      number: "02",
      title: "The Kindness of Your Heart",
      description:
        "You feel things deeply. You notice when someone is uncomfortable, you care for animals, and you always leave people feeling softer and more valued than they did before.",
      tagline: "A soul of pure gold",
      category: "Empathy",
      accentColor: "#D4AF37",
    },
    {
      id: 3,
      number: "03",
      title: "How You Look When You're Focused",
      description:
        "That tiny concentrated expression you make when you are reading, creating, or working on something you care about. It is the most endearing sight in the world.",
      tagline: "Quiet brilliance",
      category: "Adoration",
      accentColor: "#E29578",
    },
    {
      id: 4,
      number: "04",
      title: "You Turn Normal Days Into Magic",
      description:
        "A routine grocery run or an idle car ride becomes an adventure because you're sitting beside me singing along to the radio with complete joyful abandonment.",
      tagline: "Everyday alchemy",
      category: "Magic",
      accentColor: "#F3C969",
    },
    {
      id: 5,
      number: "05",
      title: "Your Unwavering Support",
      description:
        "Whenever I doubt myself or face obstacles, your belief in me stands tall like an anchor. Knowing you are in my corner gives me the courage to conquer anything.",
      tagline: "My greatest strength",
      category: "Devotion",
      accentColor: "#FFCAD4",
    },
    {
      id: 6,
      number: "06",
      title: "The Warmth in Your Hugs",
      description:
        "Wrapping my arms around you after a long day is the physical definition of coming home. Everything exhales, the heart slows, and peace settles in.",
      tagline: "My safe haven",
      category: "Comfort",
      accentColor: "#DDA15E",
    },
    {
      id: 7,
      number: "07",
      title: "Your Playful Mischief",
      description:
        "The cheeky eye roll, the witty comebacks, and the sweet teasing that keeps our spark burning bright and reminds me never to take life too seriously.",
      tagline: "My partner in crime",
      category: "Fun",
      accentColor: "#E07A5F",
    },
    {
      id: 8,
      number: "08",
      title: "Just How Beautiful You Are",
      description:
        "From the way your eyes crinkle when you're happy, to your natural grace, to the quiet moments when your hair is a mess in the morning. You are poetry in motion.",
      tagline: "Breathtaking always",
      category: "Beauty",
      accentColor: "#E8AEB7",
    },
  ],

  favoriteMoments: [
    {
      id: "moment-1",
      title: "The Sunset We Wished Would Never End",
      date: "Golden Sunset",
      location: "By The Waterfront",
      story:
        "The sky was painted in shades of peach, lavender, and amber. You leaned your head against my shoulder, wrapped in my jacket, while we watched the waves crash. We didn't say a single word for twenty minutes, yet we said everything.",
      image: IMAGES.couple02,
      accentQuote: "“In that silence, I promised myself I would spend forever protecting your peace.”",
    },
    {
      id: "moment-2",
      title: "The Spontaneous Midnight Drive",
      date: "Late Summer Night",
      location: "Empty Highway Under The Stars",
      story:
        "No destination, just cool wind rushing through open windows, playlists blending together, and your hand resting comfortably on mine over the gear shift. We chased nothing and found everything.",
      image: IMAGES.memory03,
      accentQuote: "“The world was fast asleep, but we were wide awake dreaming.”",
    },
    {
      id: "moment-3",
      title: "Laughing Until Our Stomachs Ached",
      date: "Cozy Evening",
      location: "Our Kitchen Floor",
      story:
        "A dinner experiment that went hilariously wrong, ending in spilled sauce, takeout boxes, and both of us sitting on the floor laughing so hard tears were streaming down our faces.",
      image: IMAGES.memory05,
      accentQuote: "“Imperfection never felt so flawlessly happy.”",
    },
  ],

  openWhen: [
    {
      id: "env-sad",
      slug: "sad",
      title: "Open When You're Sad",
      tagline: "For the heavy days that weigh on your heart",
      iconName: "CloudRain",
      previewSnippet: "Take a deep breath. Soften your shoulders. I am right here...",
      letterContent: [
        "My dearest Lakshya,",
        "If today is heavy, please remember that it's okay not to be unbreakable. You don't have to carry the entire weight of the world on your shoulders. You are allowed to rest, to breathe, and to let go.",
        "Take a slow breath right now. Close your eyes for a second. Picture me wrapping you into that tight, warm embrace where nothing can hurt you.",
        "Bad days are just brief weather; they are not the sky. Your gentle spirit and strength will guide you through, and until it does, I will hold your hand through every cloud. You are never alone.",
      ],
      signature: "Forever holding you close,",
      postScript: "P.S. Drink some water and put on your comfiest sweater. You are so loved.",
      accentGlow: "from-blue-500/20 to-indigo-500/20",
    },
    {
      id: "env-miss-me",
      slug: "miss-me",
      title: "Open When You Miss Me",
      tagline: "When distance feels too quiet",
      iconName: "Compass",
      previewSnippet: "No matter how many miles lie between us, look up at the moon...",
      letterContent: [
        "My Lakshya,",
        "Whenever the room feels too quiet or the miles feel too long, remember that distance is only physical. My thoughts are with you every waking moment.",
        "Look at the palm of your hand. Close it gently. That's me holding on to you. Listen to our song, remember that silly joke we couldn't stop laughing at, and know that I am counting the minutes until I see your face again.",
        "You are etched into every heartbeat. Soon enough, I'll be right in front of you, not letting go.",
      ],
      signature: "Counting down the seconds,",
      postScript: "P.S. Send me a voice note right now — I want to hear your voice.",
      accentGlow: "from-rose-500/20 to-pink-500/20",
    },
    {
      id: "env-need-smile",
      slug: "need-a-smile",
      title: "Open When You Need A Smile",
      tagline: "A quick dose of sweetness and chuckles",
      iconName: "Sparkles",
      previewSnippet: "Did you know that you have the most scientifically adorable smile ever?",
      letterContent: [
        "Hey beautiful,",
        "Did you know that whenever you smile, my brain completely forgets whatever I was stressed about? It's actually a proven scientific phenomenon in our relationship.",
        "Remember that time I tried to look all smooth and ended up nearly tripping over my own feet? Or how you pretend not to want fries and then eat 80% of mine?",
        "You are the sunshine of my universe. Curve those lips upward right now — yes, right this second. That's the girl who rules my heart.",
      ],
      signature: "Your biggest fan & personal comedian,",
      postScript: "P.S. Smile wider. There it is. Perfect.",
      accentGlow: "from-amber-500/20 to-yellow-500/20",
    },
    {
      id: "env-feel-alone",
      slug: "feel-alone",
      title: "Open When You Feel Alone",
      tagline: "To remind you of your eternal fortress",
      iconName: "Shield",
      previewSnippet: "You are the center of my devotion. You will never walk alone again...",
      letterContent: [
        "Sweetheart,",
        "Even when loneliness creeps in, please hear this truth loud and clear: You are deeply, profoundly, unconditionally cherished.",
        "You have someone who prays for your happiness every day, who admires your courage, and who is fiercely proud of the woman you are becoming.",
        "Whenever the world feels distant, remind yourself: You have a permanent home in my heart, and nothing can ever change that.",
      ],
      signature: "Your eternal anchor,",
      postScript: "P.S. You are irreplaceable.",
      accentGlow: "from-purple-500/20 to-rose-500/20",
    },
    {
      id: "env-love-you",
      slug: "how-much-i-love-you",
      title: "Open When You Want To Know How Much I Love You",
      tagline: "An infinite measure beyond words",
      iconName: "HeartHandshake",
      previewSnippet: "More than yesterday, less than tomorrow, and deeper than oceans...",
      letterContent: [
        "My Lakshya, my soul,",
        "If you ever wonder how much you mean to me, imagine trying to count the stars in the night sky or measuring the depth of the ocean with a teacup. It's impossible.",
        "I love you in the quiet mornings, in the frantic afternoons, and in the stillness of midnight. I love you for who you were, who you are today, and every person you will blossom into tomorrow.",
        "Choosing you is the easiest, most joyful decision of my existence. I would choose you in every universe, in every lifetime, without hesitation.",
      ],
      signature: "Completely, hopelessly, endlessly yours,",
      postScript: "P.S. I love you more than words will ever have the power to say.",
      accentGlow: "from-red-500/25 to-rose-500/25",
    },
  ],

  letter: {
    salutation: "My Dearest Lakshya,",
    paragraphs: [
      "As October 23 arrives, I find myself looking back at all the steps that brought us to this moment. Life has a strange and beautiful way of weaving paths together, but meeting you was never a coincidence — it was the single greatest gift the universe ever granted me.",
      "You carry a grace that commands every room without ever raising your voice. Your empathy touches everyone who crosses your path, and your laughter has been the softest sanctuary I have ever known. In a world that often moves too fast and feels too uncertain, you are my steady ground, my calm water, and my favorite tomorrow.",
      "On this birthday, I don't just celebrate another year added to your life. I celebrate your courage, your brilliance, the dreams you chase with such fire, and the kindness you pour out so generously. I celebrate the way your eyes light up when you discover something beautiful, and how you make every ordinary day feel like a sacred chapter in an epic novel.",
      "Thank you for loving me patiently. Thank you for making me want to become a better man every single day. My only wish today is to see your dreams come true, to be by your side when they do, and to make sure you never go a day without knowing just how treasured you are.",
    ],
    closing: "With every beat of my heart, today and for all the birthdays to come,",
    signature: "Forever Yours",
    postscript: "P.S. Keep scrolling, my love. There is still more waiting for you.",
  },

  constellation: {
    subtitle: "OUR CELESTIAL MILESTONES",
    description: "Every memory with you is a star pinned into the sky of our love story.",
    stars: [
      {
        id: "star-1",
        x: 18,
        y: 35,
        name: "First Light",
        date: "The First Glimpse",
        title: "The Spark That Lit The Sky",
        story: "The exact moment I saw you for the first time. The genesis of our constellation.",
        image: IMAGES.hero,
        brightness: 3,
        connections: ["star-2", "star-3"],
      },
      {
        id: "star-2",
        x: 38,
        y: 20,
        name: "Harmonia",
        date: "Midnight Symphony",
        title: "Our First Endless Conversation",
        story: "Connecting two souls that had been searching for each other across the cosmos.",
        image: IMAGES.memory01,
        brightness: 2,
        connections: ["star-3", "star-4"],
      },
      {
        id: "star-3",
        x: 52,
        y: 55,
        name: "Luminescence",
        date: "The Golden Evening",
        title: "The Laughter That Echoes",
        story: "A night filled with effortless laughter and the unspoken certainty that we belonged together.",
        image: IMAGES.couple01,
        brightness: 3,
        connections: ["star-4", "star-5"],
      },
      {
        id: "star-4",
        x: 70,
        y: 28,
        name: "Sanctuary",
        date: "Quiet Rain",
        title: "Peace In Your Arms",
        story: "Realizing that home isn't four walls and a roof; home is wherever you are breathing next to me.",
        image: IMAGES.memory04,
        brightness: 2,
        connections: ["star-5"],
      },
      {
        id: "star-5",
        x: 84,
        y: 60,
        name: "Aeterna",
        date: "October 23",
        title: "Lakshya's Day",
        story: "The brightest star in our galaxy — celebrating the woman who gave life its deepest meaning.",
        image: IMAGES.lakshya,
        brightness: 3,
        connections: [],
      },
    ],
  },

  futureDreams: [
    {
      id: "fut-1",
      number: "01",
      title: "More Sunsets Across The World",
      description: "Standing on cliffs, beaches, and city balconies with our fingers intertwined, watching the golden light fade together.",
      wish: "To chase every horizon with you.",
      icon: "Sunset",
    },
    {
      id: "fut-2",
      number: "02",
      title: "Countless Unhurried Mornings",
      description: "Waking up slowly with fresh coffee brewing, sunlight streaming across the sheets, and no alarms to rush us.",
      wish: "A lifetime of quiet peace.",
      icon: "Coffee",
    },
    {
      id: "fut-3",
      number: "03",
      title: "Wild & Spontaneous Adventures",
      description: "Getting lost in foreign streets, discovering hidden cafes, dancing in sudden downpours, and filling passports with memories.",
      wish: "Exploring the world side-by-side.",
      icon: "Compass",
    },
    {
      id: "fut-4",
      number: "04",
      title: "Building Our Sanctuary",
      description: "Creating a home that smells like vanilla and books, filled with framed photographs, silly inside jokes, and unconditional warmth.",
      wish: "Our own little kingdom of love.",
      icon: "Home",
    },
    {
      id: "fut-5",
      number: "05",
      title: "Growing Old & Still Laughing",
      description: "Wrinkles around our eyes from smiling too much, holding hands on park benches, still looking at you with that very first spark.",
      wish: "Loving you through every season of age.",
      icon: "Heart",
    },
    {
      id: "fut-6",
      number: "06",
      title: "A Hundred More Birthdays",
      description: "Celebrating you every single year with even more joy, more cakes, more surprises, and deeper gratitude for having you.",
      wish: "Never-ending celebrations of you.",
      icon: "Sparkles",
    },
  ],

  promise: {
    eyebrow: "A SACRED VOW",
    headline: "My Promise To You",
    lines: [
      "I promise to listen to you, not just when it's easy, but especially when it matters.",
      "I promise to celebrate your triumphs as if they were my own, and stand as your fortress when you feel tired.",
      "I promise to bring you coffee, keep making you laugh when you're upset, and never let you forget how stunning you are.",
      "I promise to choose you every single morning when I open my eyes, and every night before I sleep.",
      "Above all else, I promise to love you fiercely, gently, and without condition.",
    ],
    closing: "Today, tomorrow, and every day that follows.",
  },

  surpriseReveal: {
    preText: "Lakshya…",
    highlightText: "There is one more thing.",
    climaxHeadline: "Happy Birthday, My Love ❤️",
    message: "May this year bring you all the warmth, triumph, peace, and endless happiness your beautiful soul deserves.",
    candlePrompt: "Tap to blow out your birthday candles & make a secret wish",
    candleBlownMessage: "Your wish has been carried to the stars ✨ May every piece of it come true!",
  },

  lastPage: {
    quote: "“Some stories are written in ink, but ours was written in the stars.”",
    author: "Dedicated to Lakshya with all my love",
    finalNote: "Thank you for being the most wondrous part of my world. Happy Birthday.",
    replayText: "Replay Our Love Story",
  },

  easterEggs: {
    heartTapsNeeded: 3,
    hiddenNotes: [
      "Secret Love Note #1: You have the prettiest soul I've ever encountered. Every time you smile, my day turns brighter.",
      "Secret Love Note #2: I still get those nervous, wonderful butterflies whenever you look into my eyes.",
      "Secret Love Note #3: You unlocked the master secret! I love you more than all the sand grains on every shore. Happy Birthday, Lakshya! ❤️",
    ],
  },
};
