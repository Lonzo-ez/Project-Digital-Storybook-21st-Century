document.addEventListener("DOMContentLoaded", () => {
    "use strict";
 
    // binago ko since iba iba number of scenes per act
    const ACT_DATA = {
 
    1: {
        title: "Act I",
        scenes: [
            {img: "./ResourceImages/A1S1.png", speaker: "Narrator", text: "Museums are truly a special place, don’t you agree, reader? Well, INTERN surely would say the same. With her love of art and history, museums are in no doubt a magical place for her. Filled with miraculous artworks with a story, carefully crafted works with meaning, and astonishing photographs with a point to fight for.", audio: "./ResourceAudio/A1S1.mp3" },
            { img: "./ResourceImages/A1S2.png", speaker: "Intern", text: "I’ve always loved museums, but stepping into one with a new objective of sharing my love for art to the people around is a surreal experience! I’m beyond nervous, but also.. really excited!", audio: "./ResourceAudio/A1S2.mp3"  },
            { img: "./ResourceImages/A1S3.png", speaker: "Narrator", text: "As INTERN wanders around with a new beginning of her internship at [MUSEUM NAME], she spots a rather unique looking artwork. One she has not yet seen before, and trust me, she’s seen a lot.", audio: "./ResourceAudio/A1S3.mp3"  },
            { img: "./ResourceImages/A1S4.png", speaker: "Museum Worker", text: " I see you’ve spotted my favourite piece.", audio: "./ResourceAudio/A1S4.mp3" }, 
            { img: "./ResourceImages/A1S5.png", speaker: "Intern", text: "Quite unique, no? It’s the first time I’ve seen it. It’s almost as if the first glance I took, the painting was moving.", audio: "./ResourceAudio/A1S5.mp3"  },
            { img: "./ResourceImages/A1S5.5.png", speaker: "Meseum Worker", text: "Right, it’s only been put up just recently.", audio: "./ResourceAudio/A1S6.mp3" }, 
            { img: "./ResourceImages/A1S6.png", speaker: "Intern", text: "Why so? It seems too pretty to just be put away! *jokingly*", audio: "./ResourceAudio/A1S7.mp3" },
            { img: "./ResourceImages/A1S7.png", speaker: "Museum Worker", text: "I agree! But it’s been put away due to the privacy of the artist. Only now has it been granted permission to be displayed. Personally? I think it’s beautiful.", audio: "./ResourceAudio/A1S8.mp3" },
            { img: "./ResourceImages/A1S8.png", speaker: "Intern", text: "It really is. Did the artist give a description or an explanation to their work?", audio: "./ResourceAudio/A1S9.mp3" },
            { img: "./ResourceImages/A1S9.png", speaker: "Meseum Worker", text: "You must have not heard of the story of Time’s Forbidden Lovers! Come, I love telling this story.", audio: "./ResourceAudio/A1S10.mp3" },
            { img: "./ResourceImages/A1S10.png", speaker: "Narrator", text: "With an excited and anticipating heart for new knowledge, INTERN sat down next to the fella with a story to tell. Now, reader, I’d advise you to do the same. Sit back, relax, and grab a snack while you’re at it, as this is going to be a rollercoaster ride in time.", audio: "./ResourceAudio/A1S11.mp3" },
            // ... up to 9 scenes
        ]
    },
    2: {
        title: "Act II",
        scenes: [
            { img: "./ResourceImages/A2S1.png", speaker: "Narrator", text: "Clara is a beautiful young woman with hair as black as the night time sky, skin of radiant bronze, and soft, doe-like eyes. This woman is not different from any other woman in love. She beams with joy, speaks gently, and has a gaze that captures the hearts of any man that she wishes. But don’t be fooled, this fine young lady’s heart is already owed to another.", audio: "./ResourceAudio/A2S1.mp3" },
            { img: "./ResourceImages/A2S1.5.png", speaker: "Narrator", text: "With his thick and wavy hair to match hers, his gorgeous tan complexion, and dark, expressive eyes, it’d be hard to say that they weren’t a perfect match. Couldn’t you agree more, reader?", audio: "./ResourceAudio/A2S2.mp3" },
            { img: "./ResourceImages/A2S2.png", speaker: "Clara", text: "Andres!", audio: "./ResourceAudio/A2S3.mp3" },
            { img: "./ResourceImages/A2S2.png", speaker: "Andres", text: "Clara, ang aking iniirog!", audio: "./ResourceAudio/A2S4.mp3" },
            { img: "./ResourceImages/A2S3.png", speaker: "Clara", text: "Mahal ko, maaari ka bang dumalo sa pagsasama ng aking pamilya mamayang paglubog ng araw?", audio: "./ResourceAudio/A2S5.mp3" },
            { img: "./ResourceImages/A2S3.1.png", speaker: "Andres", text: "Siyempre naman, mahal ko. Ngunit, maaari bang mapasa atin ang kaunting oras bago lumubog ang araw? ", audio: "./ResourceAudio/A2S6.mp3" },
            { img: "./ResourceImages/A2S3.2.png", speaker: "Clara", text: "Nais ko rin iyan, Andres.", audio: "./ResourceAudio/A2S7.mp3" },
            { img: "./ResourceImages/A2S4.png", speaker: "Narrator", text: "Clara and Andres sit in front of the peaceful sea shore where numerous fishing boats are parked as the glittering light from the sun hits their eyes. But they couldn’t care less, for it isn’t the sun’s glare that they are lost in–but in each other’s loving gaze while all hell breaks loose around them…", audio: "./ResourceAudio/A2S8.mp3" },
            { img: "./ResourceImages/A2S5.png", speaker: "Narrator", text: "No, literally. All hell broke loose as the Spaniards invaded the shores and forests to claim ownership. ", audio: "./ResourceAudio/A2S9.mp3" },
            { img: "./ResourceImages/A2S6.png", speaker: "Narrator", text: "Andres was captured during a battle when the Spaniards located their baranggay, leaving Clara to fend for herself.", audio: "./ResourceAudio/A2S10.mp3" },
            { img: "./ResourceImages/A2S7.png", speaker: "Narrator", text: "She ran aimlessly in hopes to find her lover.", audio: "./ResourceAudio/A2S11.mp3" },
            { img: "./ResourceImages/A2S8.png", speaker: "Narrator", text: "and in a final moment as she locked eyes with Andres, he gets killed.", audio: "./ResourceAudio/A2S12.mp3" },
            { img: "./ResourceImages/A2S8.5.png", speaker: "Clara", text:  "ANDRES!!", audio: "./ResourceAudio/A2S13.mp3" },
            { img: "./ResourceImages/A2S9.png", speaker: "Narrator", text: "She fell to her knees in horror. And in a shaking breath, she whispered a simple wish–or was it a plea?", audio: "./ResourceAudio/A2S14.mp3" },
            { img: "./ResourceImages/A2S9.1.png", speaker: "Clara", text: "Kung itinadhana, nawa’y ibalik tayo ng panahon sa isa’t isa.", audio: "./ResourceAudio/A2S15.mp3" },
            { img: "./ResourceImages/A2S9.2.png", speaker: "Narrator", text: "Before she closed her eyes.", audio: "./ResourceAudio/A2S16.mp3" },
            // ...
        ]
    },  
  3: {
        title: "Act III",
        scenes: [
            { img: "./ResourceImages/A3S1.png", speaker: "Clara", text: "Aray ko... Nasaan ako? Bakit.. Ang tahimik at walang kagubatan? Anong nangyari sa digmaan? Nasaan si Andres?", audio: "./ResourceAudio/A3S1.mp3" },
            { img: "./ResourceImages/A3S1.png", speaker: "Jasmine", text: "Oh, Clara, gising ka na.", audio: "./ResourceAudio/A3S2.mp3" },
            { img: "./ResourceImages/A3S1.png", speaker: "Clara", text: "Nasaan ako?", audio: "./ResourceAudio/A3S3.mp3" },
            { img: "./ResourceImages/A3S1.png", speaker: "Jasmine", text: "Hinihintay na tayo sa simbahan. Sumama ka na sa akin.", audio: "./ResourceAudio/A3S4.mp3" },
            { img: "./ResourceImages/A3S1.png", speaker: "Clara", text: "Simbahan?", audio: "./ResourceAudio/A3S5.mp3" },
            { img: "./ResourceImages/A3S1.png", speaker: "Clara", text: "Ay, matanong ko nga pala kung bakit sila naghahakot ng mga bato? Hindi ba't oras ito ng pag-aani?", audio: "./ResourceAudio/A3S6.mp3" },
            { img: "./ResourceImages/A3S1.png", speaker: "Jasmine", text: "Obligasyon na natin ang mag-polo y servicio para sa pagpapatayo ng kampanario. Kung hindi natin ito gagawin papatawan tayo ng mas mataas na buwis ng Frayle, kaya halika na at lumakad ka na ng mabilis.", audio: "./ResourceAudio/A3S7.mp3" },
            { img: "./ResourceImages/A3S2.png", speaker: "Clara", text: "At dito ko na nakita ang tinutukoy niyang “simbahan.” Maganda man ang kaniyang labas na hitsura, ngunit ang nilalaman ay kakaiba sa akin. Hindi tulad ng mga datu sa aming baranggay, ang mga nagsasalita rito ay mukhang mas may awtoridad sa amin. Ang tumatak sa isipan ko sa buong oras na nandoon, ay ang kuwento tungkol sa Doctrina Cristiana. Mayroon kaya talagang mga Diyos na tinutukoy nila?", audio: "./ResourceAudio/A3S8.mp3" },
            { img: "./ResourceImages/A3S2.png", speaker: "Clara", text: "Bago pa lumalim ang aking mga pag-iisip, bumalik sa isip ko ang aking minamahal na nakita kong ilayo sa akin. Kung ako’y napagbigyan ng tadhanang mabuhay muli, siya rin kaya? ", audio: "./ResourceAudio/A3S9.mp3" },
            { img: "./ResourceImages/A3S2.png", speaker: "Clara", text: "Gaano man katagal ang panahon na hihintayin ko, titiyagahin ko para sa iyo, Andres.", audio: "./ResourceAudio/A3S10.mp3" },
            { img: "./ResourceImages/A3S3.png", speaker: "Andres", text: "Maraming salamat sa lakas na ibinibigay mo para sa ating lupang sinilangan, Clara.", audio: "./ResourceAudio/A3S11.mp3" },
            { img: "./ResourceImages/A3S3.png", speaker: "Paris", text: "Nararamdaman na ang paghina ng sistema ng mga Espanyol. Kaunti na lang, mananalo rin tayo sa laban na ito.", audio: "./ResourceAudio/A3S12.mp3" },
            { img: "./ResourceImages/A3S3.png", speaker: "Clara", text: "Maraming salamat sa inyo. Ako muna’y mauuna at tutungo sa aking tahanan.", audio: "./ResourceAudio/A3S13.mp3" },
            { img: "./ResourceImages/A3S4.png", speaker: "Museum Worker", text: "Before Clara could reach her home, she was held captive and brought to a private place.", audio: "./ResourceAudio/A3S14.mp3" },
            { img: "./ResourceImages/A3S4.png", speaker: "Museum Worker", text: "Wanna know the plot twist?", audio: "./ResourceAudio/A3S15.mp3" },
            { img: "./ResourceImages/A3S4.png", speaker: "Abi", text: "What is it?", audio: "./ResourceAudio/A3S16.mp3" },
            { img: "./ResourceImages/A3S4.png", speaker: "Andres", text: "Nabuhay ka rin pala gaya ng nasa isip ko. Pero bakit..? Bakit kailangang magkaiba tayo ng pinaglalabanan..?", audio: "./ResourceAudio/A3S17.mp3" },
            { img: "./ResourceImages/A3S4.png", speaker: "Abi", text: "WEHH NABUHAY ULIT SI ANDRES?? Pero bakit, kontra na sa kaniya paano nangyari yoon?", audio: "./ResourceAudio/A3S18.mp3" },
            { img: "./ResourceImages/A3S5.png", speaker: "Clara", text: "Mahal ko… Ikaw ba tal aga iyan?", audio: "./ResourceAudio/A3S19.mp3" },
            { img: "./ResourceImages/A3S5.png", speaker: "Andres", text: "Kilala ka namin. Ikaw ang isa sa mga naglalaban para sa rebolusyon, hindi ba?", audio: "./ResourceAudio/A3S20.mp3" },
            { img: "./ResourceImages/A3S5.png", speaker: "Clara", text: "Pinaglalaban ko ang bansa natin para sa iyo, mahal ko! Hinahanap kita nang matagal na… bakit naman ganito ang tadhana sa atin..?", audio: "./ResourceAudio/A3S21.mp3" },
            { img: "./ResourceImages/A3S5.png", speaker: "Andres", text: "HINDI KITA KILALA! Huwag mo akong gamitan ng mga matatamis na salita, TAKSIL! Hindi puwedeng ipalagpas ang ganito. Kaunti na lang, mahahanap din namin ang iba mong kasabwat  hanggang sa wala nang maglalaban para sa bansang ito.", audio: "./ResourceAudio/A3S22.mp3" },
            { img: "./ResourceImages/A3S6.png", speaker: "Abi", text: "HE KILLED HER?", audio: "./ResourceAudio/A3S23.mp3" },
            { img: "./ResourceImages/A3S6.png", speaker: "Museum Worker", text: "Almost. Right before he could, Clara’s partners in the revolution figured something was off and followed her until Andres captured her. Thus, killing him first.", audio: "./ResourceAudio/A3S24.mp3" },
            { img: "./ResourceImages/A3S6.png", speaker: "Museum Worker", text: "But you wanna know what’s more tragic? Clara still died, not by force, but by an agonizing pain after witnessing the love of her life get murdered yet again.", audio: "./ResourceAudio/A3S25.mp3" },
             // ...
        ]
    },
    4: {
        title: "Act IV",
        scenes: [
            { img: "./ResourceImages/A4S1.png", speaker: "Museum Worker", text: "When Clara woke up again, she had experienced another time skip. Except this time, the quietness was not an eerie and unsettling feeling. This time, it felt like the air was lighter, and as if a 300-year weight had been lifted where people did not hide out of fear anymore.", audio: "./ResourceAudio/A4S1.mp3" },
            { img: "./ResourceImages/A4S1.png", speaker: "Clara", text: "Ito na naman. Nasaang panahon na kaya ako?", audio: "./ResourceAudio/A4S2.mp3" },
            { img: "./ResourceImages/A4S2.png", speaker: "Clara", text: "Paumanhin po, maaari po bang magtanong kung anong taon na?", audio: "./ResourceAudio/A4S3.mp3" },
            { img: "./ResourceImages/A4S2.png", speaker: "Dominic", text: "Huh? What are you saying?", audio: "./ResourceAudio/A4S4.mp3" },
            { img: "./ResourceImages/A4S2.png", speaker: "Clara", text: "Ano po iyun?", audio: "./ResourceAudio/A4S5.mp3" },
            { img: "./ResourceImages/A4S2.png", speaker: "Dominic", text: "I don’t understand you. I’m sorry.", audio: "./ResourceAudio/A4S6.mp3" },
            { img: "./ResourceImages/A4S2.png", speaker: "Clara", text: "Magtatanong lamang po ako—", audio: "./ResourceAudio/A4S7.mp3" },
            { img: "./ResourceImages/A4S2.png", speaker: "Dominic", text: "I don’t understand what you’re saying, can’t you speak English?", audio: "./ResourceAudio/A4S8.mp3" },
            { img: "./ResourceImages/A4S2.png", speaker: "Clara", text: "Taon lamang po, taon.", audio: "./ResourceAudio/A4S9.mp3" },
            { img: "./ResourceImages/A4S2.png", speaker: "Dominic", text: "Can you say it in English?", audio: "./ResourceAudio/A4S10.mp3" },
            { img: "./ResourceImages/A4S2.png", speaker: "Clara", text: "Huwag na nga! Sa iba na lang!", audio: "./ResourceAudio/A4S11.mp3" },
            { img: "./ResourceImages/A4S3.png", speaker: "Clara", text: "Ano ba naman iyun? Bakit hindi ko siya maintindihan? Nasakop ba ulit tayo ng banyagang bansa?", audio: "./ResourceAudio/A4S12.mp3" },
            { img: "./ResourceImages/A4S3.png", speaker: "FATHER", text: "Anak! Ayan ka pala! Bilisan mo na, at baka mahuli ka pa sa pagpunta ng paaralan.", audio: "./ResourceAudio/A4S13.mp3" },
            { img: "./ResourceImages/A4S3.png", speaker: "Clara", text: "Paaralan?", audio: "./ResourceAudio/A4S14.mp3" },
            { img: "./ResourceImages/A4S3.png", speaker: "Clara", text: "Pagpunta ko sa lugar na ibinigay sa akin ng aking tatay, iba agad ang pakiramdam. Hindi ito katulad ng pinasukan kong simbahan sa nakaraang buhay ko. Hindi kami napipilitang magbasa patungkol sa relihiyon, kundi ang tinuturo dito ay patungkol sa literatura at sa panibagong wikang Ingles.", audio: "./ResourceAudio/A4S15.mp3" },
            { img: "./ResourceImages/A4S3.png", speaker: "Clara", text: "Kakaiba ang panahon na ito. Ang daming sulatin sa mga lokal na diyaryo at mga magasin. Mukhang ang pagsusulat ay ginagamit bilang sining at hindi obligasyon. Parang mananatili ako rito.", audio: "./ResourceAudio/A4S15.mp3" },
            { img: "./ResourceImages/A4S4.png", speaker: "Museum Worker", text: "One day, while she was reading a textbook about literary works, a cute boy approached her to ask.", audio: "./ResourceAudio/A4S17.mp3" },
            { img: "./ResourceImages/A4S4.png", speaker: "Abi", text: "NO WAY..?", audio: "./ResourceAudio/A4S18.mp3" },
            { img: "./ResourceImages/A4S5.png", speaker: "Andres", text: "Mukhang maganda ang librong binabasa mo na iyan.", audio: "./ResourceAudio/A4S19.mp3" },
            { img: "./ResourceImages/A4S5.png", speaker: "Clara", text: "Andres..?", audio: "./ResourceAudio/A4S20.mp3" },
            { img: "./ResourceImages/A4S5.png", speaker: "Andres", text: "Nakita na rin kita, mahal.", audio: "./ResourceAudio/A4S21.mp3" },
            { img: "./ResourceImages/A4S6.png", speaker: "Clara", text: "Naaalala mo ako?", audio: "./ResourceAudio/A4S22.mp3" },
            { img: "./ResourceImages/A4S6.png", speaker: "Andres", text: "Syempre naman. Hindi ko man alam saan ka, nararamdaman ng puso ko’y nandito ka lamang.", audio: "./ResourceAudio/A4S23.mp3" },
            { img: "./ResourceImages/A4S6.png", speaker: "Clara", text: "Mahal ko, ang tagal kitang hinintay. *emotional*", audio: "./ResourceAudio/A4S24.mp3" },
            { img: "./ResourceImages/A4S6.png", speaker: "Andres", text: "Alam ko, mahal. Ngayong panahon, gusto kong magsama pa tayo nang matagal. Puwede ba, Clara?", audio: "./ResourceAudio/A4S25.mp3" },
            { img: "./ResourceImages/A4S6.png", speaker: "Clara", text: "Puwedeng-puwede.", audio: "./ResourceAudio/A4S26.mp3" },
            { img: "./ResourceImages/A4S6.png", speaker: "Clara", text: "Hindi ko man akalain na may ibang plano pala ang tadhana. Pagkurap ko ay nakikita ko na lamang si Andres na papaalis para ipaglaban ang ating bansa dahil sa panibagong digmaan at mananakop. Kahit anumang hintay ko habang dumaan ang digmaang ito ay hindi ko na muli siyang makita.", audio: "./ResourceAudio/A4S27.mp3" },
            { img: "./ResourceImages/A4S6.png", speaker: "Museum Worker", text: "She suffered a heart attack most likely due to a broken heart after having waited nearly 3 years for her lover.", audio: "./ResourceAudio/A4S28.mp3" },
            { img: "./ResourceImages/A4S6.png", speaker: "Abi", text: "Fate really hated them.", audio: "./ResourceAudio/A4S29.mp3" },
            // ...
        ]
    },
    5: {
        title: "Act V",
        scenes: [
            { img: "./ResourceImages/A5S1.png", speaker: "Clara", text: "Hindi ko man lang naramdaman ang tagal ng pagpikit nang yanigin ako ng isang tao. Nang tiningnan ko nang maayos ay namukhaan ko si Andres. Naunahan niya akong mahanap siya.-clara mae", audio: "./ResourceAudio/A5S1.mp3" },
            { img: "./ResourceImages/A5S2.png", speaker: "Museum Worker", text: " Waking up for the third time, Clara once again felt that crushing pressure from when the foreign Spaniards held control.", audio: "./ResourceAudio/A5S2.mp3" },
            { img: "./ResourceImages/A5S2.png", speaker: "Museum Worker", text: "The liveliness of the streets were gone once more as many people hid from the numerous soldiers that now inhabited the land.", audio: "./ResourceAudio/A5S3.mp3" },
            { img: "./ResourceImages/A5S3.png", speaker: "Clara", text: "Bago pa ako makapagsalita ay pinatahimik niya ako at bumulong.", audio: "./ResourceAudio/A5S4.mp3" },
            { img: "./ResourceImages/A5S3.png", speaker: "Andres", text: "Nakuha tayo ng mga hapon. Mag-ingat ka sa mga maaari mong sabihin lalo na kung iyan ay masama sa paningin ng mga hapon.", audio: "./ResourceAudio/A5S5.mp3" },
            { img: "./ResourceImages/A5S3.png", speaker: "Clara", text: "Nakakagulat man ang bungad niya, wala akong makitang masama rito. Kundi ang nasa isip ko lamang ay mapapahaba ang panahon kung saan magkasama kami ng iniibig ko.", audio: "./ResourceAudio/A5S6.mp3" },
            { img: "./ResourceImages/A5S4.png", speaker: "Clara", text: "Ngayon, sa kabalintunaan, walang masakit na paghihiwalay na nangyari sa amin sa buong tatlong taong gahas na pagsasakop ng mga hapon.", audio: "./ResourceAudio/A5S7.mp3" },
            { img: "./ResourceImages/A5S4.png", speaker: "Clara", text: "Dumating at umalis ang pananakop ng mga hapon. Pinasok namin ang kontemporaryong panahon-", audio: "./ResourceAudio/A5S8.mp3" },
            { img: "./ResourceImages/A5S5.png", speaker: "Clara", text: "nang magkahawak ang kamay–", audio: "./ResourceAudio/A5S9.mp3" },
            { img: "./ResourceImages/A5S5.png", speaker: "Clara", text: "at walang may balak na bumitaw.", audio: "./ResourceAudio/A5S10.mp3" },
            { img: "./ResourceImages/A5S6.png", speaker: "Abi", text: "And they lived happily ever after?", audio: "./ResourceAudio/A5S11.mp3" },
            { img: "./ResourceImages/A5S6.png", speaker: "Museum Worker", text: "As cliche as that sounds, yes. They did. They lived their best lives during the contemporary period.", audio: "./ResourceAudio/A5S12.mp3" },
            { img: "./ResourceImages/A5S7.png", speaker: "Clara", text: "Nanatili kami sa presensiya ng isa’t isa hanggang sa kami’y magkasawaan – buti na lang hindi nakakasawa ang mga araw nang siya’y kasama ko.", audio: "./ResourceAudio/A5S13.mp3" },
            { img: "./ResourceImages/A5S7.png", speaker: "Clara", text: "Ako naman, pinagpatuloy ko ang pagiging manunulat. Sa bagong panahon kung saan ang literatura ay walang limitasyon, ang buhay namin ay nabubuo ng mga desisyon na kami lamang ang may karapatang gumawa.", audio: "./ResourceAudio/A5S14.mp3" },
            { img: "./ResourceImages/A5S7.png", speaker: "Clara", text: "Nagsulat ako ng libro tungkol sa dalawang magkasintahan kung saan ang panahon ang kanilang kalaban.", audio: "./ResourceAudio/A5S15.mp3" },
            { img: "./ResourceImages/A5S7.png", speaker: "Clara", text: "Kung para sa iba ay ito’y simpleng kuwento ng pag-ibig, ito’y aming mapanakit, subalit mahalagang nakaraan.", audio: "./ResourceAudio/A5S16.mp3" },
            // ...
        ]
    },
    6: {
        title: "Act VI",
        scenes: [
            { img: "./ResourceImages/A6S1.png", speaker: "Museum Worker", text: "Oh? Umiiyak ka?", audio: "./ResourceAudio/A6S1.mp3" },
            { img: "./ResourceImages/A6S1.png", speaker: "Abi", text: "It's just that… it’s such a beautiful story. Totoo man o Hindi, I do hope those lovers got to live their best lives in a world where time isn’t their enemy.", audio: "./ResourceAudio/A6S2.mp3" },
            { img: "./ResourceImages/A6S1.png", speaker: "Museum Worker", text: "Well, it really gives you a reason to look at history’s tragic story from a different angle, no? We tend to look at history from the bigger picture without realizing that the people in history had their own lives and emotions. That’s the beauty of art.", audio: "./ResourceAudio/A6S3.mp3" },
            { img: "./ResourceImages/A6S2.png", speaker: "Abi", text: "That’s such a pretty way to put it. Thank you so much for telling me that!", audio: "./ResourceAudio/A6S4.mp3" },
            { img: "./ResourceImages/A6S2.png", speaker: "Museum Worker", text: "No worries! It puts a smile to my face telling people my favourite story. I’ll get going now, I’ll leave you to ponder for a bit longer.", audio: "./ResourceAudio/A6S5.mp3" },
            { img: "./ResourceImages/A6S2.png", speaker: "Abi", text: " It’s crazy to think something like this could ever be possible, but in a way, this is simply our homeland’s history –", audio: "./ResourceAudio/A6S6.mp3" },
            { img: "./ResourceImages/A6S2.png", speaker: "Abi", text: "but told as human beings rather than the country as a whole. I’ll take this as a note to look at things from a new perspective from now on.", audio: "./ResourceAudio/A6S7.mp3" },
            // ...
        ]
    }
    /* Dito kayo maglagay ng data para sa Acts 3 hanggang 6 */
};
 
    const ACT_NUMBERS = Object.keys(ACT_DATA)
        .map(Number)
        .filter(Number.isFinite)
        .sort((a, b) => a - b);
 
    const TOTAL_SCENES = ACT_NUMBERS.reduce((total, actNumber) => {
        return total + ACT_DATA[actNumber].scenes.length;
    }, 0);
 
    const CONFIG = {
        totalActs: ACT_NUMBERS.length,
        totalScenes: TOTAL_SCENES,
        typewriterSpeed: 25,
        cameraTransitionMs: 1200,
        pageTransitionMs: 1200,
        transitionPauseMs: 150
    };
 
 
    /* STATE */
    let currentScene = 1;
    let previousScene = 0;
    let isTransitioning = false;
    let isTyping = false;
    let typeTimer = null;
    let typingTarget = null;
    let typingFullText = "";
    let typingIndex = 0;
    let audioContext = null;
    let isMuted = false;
    let currentAudio = null;
 
    /* DOM REFERENCES */
    const cameraViewport = document.getElementById("camera-viewport");
    const flipBook = document.getElementById("flip_book");
    const frontCover = document.getElementById("front-cover-trigger");
    const actTemplate = document.getElementById("act-page-template");
    const backCover = flipBook?.querySelector(".back_cover");
    const navPrev = document.getElementById("nav-prev");
    const navNext = document.getElementById("nav-next");
    const actIndicator = document.getElementById("act-indicator");
    const sceneIndicator = document.getElementById("scene-indicator");
    const progressFill = document.getElementById("progress-fill");
    const progressPercent = document.getElementById("progress-percent");
    const progressBar = document.querySelector(".progress-bar");
    const tocModal = document.getElementById("toc-modal");
    const tocList = document.getElementById("toc-list-container");
    const btnToc = document.getElementById("btn-toc");
    const btnMute = document.getElementById("btn-mute");
    const btnFullscreen = document.getElementById("btn-fullscreen");
    const btnAudioToggle = document.getElementById("btn-audio-toggle");
    const audioVisualizer = document.getElementById("audio-visualizer");
    const preloader = document.getElementById("preloader");
    const legacyDialogueHud = document.getElementById("dialogue-hud");
 
    /* UTILITY FUNCTIONS */
    function sleep(ms) {
        return new Promise(resolve => window.setTimeout(resolve, ms));
    }
    function nextFrame() {
        return new Promise(resolve => requestAnimationFrame(resolve));
    }
    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }
 
    /* ACT / SCENE CALCULATIONS */
    function getActFromScene(sceneNumber) {
    if (sceneNumber < 1 || sceneNumber > CONFIG.totalScenes) {
        return 0;
    }
 
    let sceneCounter = 0;
 
    for (const actNumber of ACT_NUMBERS) {
        const actSceneCount = ACT_DATA[actNumber].scenes.length;
 



        if (sceneNumber <= sceneCounter + actSceneCount) {
            return actNumber;
        }
 
        sceneCounter += actSceneCount;
    }
 
    return 0;
}
 
function getLocalSceneNumber(sceneNumber) {
    let sceneCounter = 0;
 
    for (const actNumber of ACT_NUMBERS) {
        const actSceneCount = ACT_DATA[actNumber].scenes.length;
 
        if (sceneNumber <= sceneCounter + actSceneCount) {
            return sceneNumber - sceneCounter;
        }
 
        sceneCounter += actSceneCount;
    }
 
    return 0;
    }
 
    function getActStartScene(actNumber) {
    let startScene = 1;
 
    for (const currentAct of ACT_NUMBERS) {
        if (currentAct === actNumber) {
            return startScene;
        }
 
        startScene += ACT_DATA[currentAct].scenes.length;
    }
 
    return 0;
    }
 
    function getActPage(actNumber) {
        if (!flipBook) return null;
        return flipBook.querySelector(`.act-page[data-act-index="${Number(actNumber)}"]`);
    }
 
    function getSceneElement(sceneNumber) {
        if (!flipBook) return null;
        return flipBook.querySelector(`.scene[data-scene-global="${Number(sceneNumber)}"]`);
    }
 
    function getDirection(oldScene, newScene) {
        if (newScene > oldScene) return "next";
        if (newScene < oldScene) return "prev";
        return "none";
    }
 
    /* ACT PAGE GENERATION */
    function generateActPages() {
        if (!flipBook || !actTemplate || !backCover) {
            console.error("Chronicles of Antiquity: required HTML elements are missing.");
            return;
        }
 
        // Remove previously generated pages so initialization can safely run again.
        flipBook.querySelectorAll(".act-page[data-act-index]").forEach(page => page.remove());
 
        for (const actNumber of ACT_NUMBERS) {
            const actData = ACT_DATA[actNumber];
            if (!actData || !Array.isArray(actData.scenes)) {
                console.error(`Act ${actNumber}: scene data is missing or invalid.`);
                continue;
            }
 
            const clone = actTemplate.content.cloneNode(true);
            const page = clone.querySelector(".act-page");
            if (!page) {
                console.error(`Act ${actNumber}: .act-page was not found in the template.`);
                continue;
            }
 
            page.dataset.actIndex = String(actNumber);
            page.dataset.actState = "future";
 
            const title = page.querySelector(".act-title-overlay");
            if (title) {
                title.textContent = actData.title || `Act ${actNumber}`;
            }
 
            const sceneTemplate = page.querySelector(".scene");



            if (!sceneTemplate && actData.scenes.length > 0) {
                console.error(`Act ${actNumber}: .scene template was not found.`);
                continue;
            }
 
            // Create as many scenes as ACT_DATA contains. This makes the scene count
            // genuinely dynamic instead of depending on the number in the HTML template.
            const sceneContainer = sceneTemplate?.parentElement;
            if (sceneTemplate && sceneContainer) {
                while (page.querySelectorAll(".scene").length < actData.scenes.length) {
                    sceneContainer.appendChild(sceneTemplate.cloneNode(true));
                }
            }
 
            const scenes = Array.from(page.querySelectorAll(".scene"));
            scenes.forEach((scene, index) => {
                const localScene = index + 1;
                const sceneData = actData.scenes[index];
 
                if (!sceneData) {
                    scene.remove();
                    return;
                }
 
                const globalScene = getActStartScene(actNumber) + localScene - 1;
 
                scene.dataset.sceneLocal = String(localScene);
                scene.dataset.sceneGlobal = String(globalScene);
                scene.dataset.actIndex = String(actNumber);
                scene.setAttribute("aria-hidden", "true");
 
                const image = scene.querySelector(".scene-image");
                const dialogueText = scene.querySelector(".scene-dialogue-text");
                const speakerName = scene.querySelector(".scene-dialogue-nameplate");
 
                if (image) {
                    image.src = sceneData.img || "";
                    image.alt = `${actData.title || `Act ${actNumber}`}, Scene ${localScene}`;
                }
 
                if (dialogueText) {
                    dialogueText.dataset.fullText = String(sceneData.text ?? "");
                    dialogueText.textContent = dialogueText.dataset.fullText;
                }
 
                if (speakerName) {
                    speakerName.textContent = String(sceneData.speaker ?? "");
                }
 
                if (sceneData.audio) {
                    scene.dataset.audio = String(sceneData.audio);
                } else {
                    delete scene.dataset.audio;
                }
            });
 
            // Insert the generated page before the back cover so the page stack
            // remains in Act I -> Act II -> ... -> final Act -> back cover order.
            flipBook.insertBefore(page, backCover);
        }
    }
 
    /* PAGE STATE */
    function resetAllPageStates() {
        if (!flipBook) return;
        flipBook.querySelectorAll(".act-page").forEach(page => {
            page.classList.remove("is-active", "is-turning");
            page.style.transform = "rotateY(0deg)";
            page.style.zIndex = "1";
            page.dataset.actState = "future";
        });
    }
    function settlePagesForAct(targetAct) {
        if (!flipBook) return;
        const pages = flipBook.querySelectorAll(".act-page");
        pages.forEach(page => {
            const pageAct = Number(page.dataset.actIndex);
            page.classList.remove("is-active", "is-turning");
            if (pageAct < targetAct) {
                page.style.transform = "rotateY(-180deg)";
                page.style.zIndex = String(pageAct);
                page.dataset.actState = "past";
            } else if (pageAct === targetAct) {
                page.style.transform = "rotateY(0deg)";
                page.style.zIndex = "100";
                page.classList.add("is-active");
                page.dataset.actState = "active";
            } else {
                page.style.transform = "rotateY(0deg)";



                page.style.zIndex = String(CONFIG.totalActs - pageAct + 1);
                page.dataset.actState = "future";
            }
        });
    }
 
    /* ACT PAGE TURN ANIMATION */
    async function animateActTurn(fromAct, toAct) {
        if (fromAct < 1 || fromAct > CONFIG.totalActs || toAct < 1 || toAct > CONFIG.totalActs || fromAct === toAct) return;
        const outgoingPage = getActPage(fromAct);
        const incomingPage = getActPage(toAct);
        if (!incomingPage) {
            console.error(`Act ${toAct} page could not be found.`);
            return;
        }
        const direction = toAct > fromAct ? "forward" : "backward";
        settlePagesForAct(fromAct);
        await nextFrame();
        if (direction === "forward") {
            if (outgoingPage) {
                outgoingPage.classList.add("is-turning");
                outgoingPage.style.zIndex = "150";
            }
            incomingPage.style.transform = "rotateY(0deg)";
            incomingPage.style.zIndex = "140";
            await nextFrame();
            if (outgoingPage) {
                outgoingPage.style.transform = "rotateY(-180deg)";
            }
            await sleep(CONFIG.pageTransitionMs);
            settlePagesForAct(toAct);
        } else {
            incomingPage.style.transform = "rotateY(-180deg)";
            incomingPage.style.zIndex = "150";
            incomingPage.classList.add("is-turning");
            await nextFrame();
            incomingPage.style.transform = "rotateY(0deg)";
            await sleep(CONFIG.pageTransitionMs);
            settlePagesForAct(toAct);
        }
    }
 
    /* CAMERA */
    function zoomIn() {
        cameraViewport?.classList.add("zoomed-in");
    }
    function zoomOut() {
        cameraViewport?.classList.remove("zoomed-in");
    }
 
    /* FRONT COVER */
    async function openFrontCover() {
        if (!frontCover) {
            console.error("Front cover element not found.");
            return;
        }
        settlePagesForAct(1);
        zoomOut();
        frontCover.style.zIndex = "900";
        frontCover.style.transform = "rotateY(0deg)";
        await nextFrame();
        frontCover.style.transform = "rotateY(-180deg)";
        await sleep(CONFIG.pageTransitionMs);
        frontCover.style.zIndex = "1";
        await sleep(120);
        zoomIn();
        await sleep(CONFIG.cameraTransitionMs);
    }
 
    /* BACK COVER */
    async function openBackCover() {
        zoomOut();
        await sleep(CONFIG.cameraTransitionMs);
        const finalAct = getActPage(CONFIG.totalActs);
        if (finalAct) {
            finalAct.classList.add("is-turning");
            finalAct.style.zIndex = "150";
            await nextFrame();
            finalAct.style.transform = "rotateY(-180deg)";
            await sleep(CONFIG.pageTransitionMs);
            finalAct.classList.remove("is-active", "is-turning");
            finalAct.style.zIndex = "1";
        }
        if (backCover) {
            backCover.style.zIndex = "900";
            backCover.style.transform = "rotateY(0deg)";
        }
    }
    async function closeBackCover() {



        if (backCover) {
            backCover.style.zIndex = "0";
        }
        const finalAct = getActPage(CONFIG.totalActs);
        if (finalAct) {
            finalAct.style.transform = "rotateY(-180deg)";
            finalAct.style.zIndex = "150";
            finalAct.classList.add("is-turning");
            await nextFrame();
            finalAct.style.transform = "rotateY(0deg)";
            await sleep(CONFIG.pageTransitionMs);
            finalAct.classList.remove("is-turning");
        }
        settlePagesForAct(CONFIG.totalActs);
        zoomIn();
        await sleep(CONFIG.cameraTransitionMs);
    }
 
    /* SCENES */
    function resetAllSceneStates() {
        if (!flipBook) return;
        flipBook.querySelectorAll(".scene").forEach(scene => {
            scene.classList.remove("is-active", "active-scene", "scene-enter-next", "scene-enter-prev", "scene-exit");
            scene.setAttribute("aria-hidden", "true");
        });
    }
    function showScene(sceneNumber, direction = "none") {

        const actNumber = getActFromScene(sceneNumber);
        const localScene = getLocalSceneNumber(sceneNumber);
        const sceneData = ACT_DATA[actNumber]?.scenes?.[localScene - 1];
        
        const scene = getSceneElement(sceneNumber);
        if (!scene) {
            console.error(`Scene ${sceneNumber} could not be found.`);
            return;
        }
        const actPage = scene.closest(".act-page");
        if (!actPage) return;
        actPage.querySelectorAll(".scene").forEach(otherScene => {
            if (otherScene !== scene) {
                otherScene.classList.remove("is-active", "active-scene", "scene-enter-next", "scene-enter-prev", "scene-exit");
                otherScene.setAttribute("aria-hidden", "true");
            }
        });
        if (direction === "next") scene.classList.add("scene-enter-next");
        if (direction === "prev") scene.classList.add("scene-enter-prev");
        scene.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => {
            scene.classList.add("is-active", "active-scene");
            requestAnimationFrame(() => {
                scene.classList.remove("scene-enter-next", "scene-enter-prev");
            });
        });
        startSceneDialogue(scene);
        playSceneAudio(sceneData?.audio);
    }
 
    /* DIALOGUE */
    function startSceneDialogue(scene) {
        stopTyping();
        const dialogue = scene.querySelector(".scene-dialogue-text");
        if (!dialogue) return;
        if (!dialogue.dataset.fullText) {
            dialogue.dataset.fullText = dialogue.textContent.trim();
        }
        const fullText = dialogue.dataset.fullText;
        if (!fullText) return;
        typingTarget = dialogue;
        typingFullText = fullText;
        typingIndex = 0;
        isTyping = true;
        dialogue.textContent = "";
        typeNextCharacter();
    }
    function typeNextCharacter() {
        if (!isTyping || !typingTarget) {
            stopTyping();
            return;
        }
        const currentSceneElement = getSceneElement(currentScene);
        const typingScene = typingTarget.closest(".scene");
        if (currentSceneElement !== typingScene) {
            stopTyping();
            return;
        }
        if (typingIndex >= typingFullText.length) {
            typingTarget.textContent = typingFullText;
            stopTyping();
            return;
        }
        typingTarget.textContent += typingFullText.charAt(typingIndex);
        typingIndex++;
        typeTimer = window.setTimeout(typeNextCharacter, CONFIG.typewriterSpeed);
    }



    function completeTypingInstantly() {
        if (!isTyping) return false;
        if (typingTarget) typingTarget.textContent = typingFullText;
        stopTyping();
        return true;
    }
    function stopTyping() {
        if (typeTimer) {
            window.clearTimeout(typeTimer);
            typeTimer = null;
        }
        isTyping = false;
        typingTarget = null;
        typingFullText = "";
        typingIndex = 0;
    }
 
    /* MAIN NAVIGATION */
    async function goToScene(targetScene) {
        if (isTransitioning) return;
        const finalTarget = clamp(targetScene, 0, CONFIG.totalScenes + 1);
        if (finalTarget === currentScene) return;
        if (isTyping) {
            completeTypingInstantly();
            return;
        }
        const oldScene = currentScene;
        const newScene = finalTarget;
        const oldAct = getActFromScene(oldScene);
        const newAct = getActFromScene(newScene);
        const direction = getDirection(oldScene, newScene);
        isTransitioning = true;
        try {
            if (oldScene === 1 && newScene === 0) {
                previousScene = currentScene;
                zoomOut();
                await sleep(CONFIG.cameraTransitionMs);
                settlePagesForAct(1);
                if (frontCover) {
                    frontCover.style.zIndex = "900";
                    frontCover.style.transform = "rotateY(-180deg)";
                    await nextFrame();
                    frontCover.style.transform = "rotateY(0deg)";
                    await sleep(CONFIG.pageTransitionMs);
                }
                resetAllSceneStates();
                currentScene = 0;
                zoomOut();
                updateUI();
                return;
            }
            if (oldScene === 0 && newScene === 1) {
                previousScene = currentScene;
                currentScene = newScene;
                await openFrontCover();
                showScene(currentScene, "next");
                updateUI();
                return;
            }
            if (oldScene === CONFIG.totalScenes && newScene === CONFIG.totalScenes + 1) {
                previousScene = currentScene;
                currentScene = newScene;
                await openBackCover();
                updateUI();
                return;
            }
            if (oldScene === CONFIG.totalScenes + 1 && newScene === CONFIG.totalScenes) {
                previousScene = currentScene;
                currentScene = newScene;
                await closeBackCover();
                showScene(currentScene, "prev");
                updateUI();
                return;
            }
            if (oldAct !== newAct && oldAct > 0 && newAct > 0) {
                previousScene = currentScene;
                currentScene = newScene;
                zoomOut();
                await sleep(CONFIG.cameraTransitionMs);
                await animateActTurn(oldAct, newAct);
                await sleep(CONFIG.transitionPauseMs);
                zoomIn();
                await sleep(CONFIG.cameraTransitionMs);
                showScene(currentScene, direction);
                updateUI();
                return;
            }
            if (oldAct === newAct && newAct > 0) {
                previousScene = currentScene;



                currentScene = newScene;
                showScene(currentScene, direction);
                updateUI();
                return;
            }
        } catch (error) {
            console.error("Chronicles of Antiquity navigation error:", error);
        } finally {
            isTransitioning = false;
        }
    }
    async function nextScene() {
        if (isTransitioning) return;
        await goToScene(currentScene + 1);
    }
    async function previousSceneAction() {
        if (isTransitioning) return;
        await goToScene(currentScene - 1);
    }
 
    /* USER INTERFACE */
    function updateUI() {
        if (!actIndicator || !sceneIndicator || !progressFill || !progressPercent || !progressBar) {
            console.warn("Chronicles of Antiquity: some UI elements are missing.");
            return;
        }
 
        if (currentScene === 0) {
            actIndicator.textContent = "Cover";
            sceneIndicator.textContent = "Click to Open";
            progressFill.style.width = "0%";
            progressPercent.textContent = "0%";
            progressBar.setAttribute("aria-valuenow", "0");
            if (navPrev) navPrev.disabled = true;
            if (navNext) navNext.disabled = CONFIG.totalScenes === 0;
            return;
        }
 
        if (currentScene > CONFIG.totalScenes) {
            actIndicator.textContent = "Finis";
            sceneIndicator.textContent = "End of Chronicles";
            progressFill.style.width = "100%";
            progressPercent.textContent = "100%";
            progressBar.setAttribute("aria-valuenow", "100");
            if (navPrev) navPrev.disabled = CONFIG.totalScenes === 0;
            if (navNext) navNext.disabled = true;
            return;
        }
 
        const actNumber = getActFromScene(currentScene);
        const localScene = getLocalSceneNumber(currentScene);
        const percentage = CONFIG.totalScenes > 0
            ? Math.round((currentScene / CONFIG.totalScenes) * 100)
            : 0;
        const actData = ACT_DATA[actNumber];
        const scenesInThisAct = actData?.scenes?.length ?? 0;
 
        actIndicator.textContent = actData?.title || `Act ${actNumber}`;
        sceneIndicator.textContent = `Scene ${localScene} / ${scenesInThisAct}`;
        progressFill.style.width = `${percentage}%`;
        progressPercent.textContent = `${percentage}%`;
        progressBar.setAttribute("aria-valuenow", String(percentage));
        if (navPrev) navPrev.disabled = currentScene <= 1;
        if (navNext) navNext.disabled = currentScene >= CONFIG.totalScenes;
    }
 
    /* TABLE OF CONTENTS */
    function buildTableOfContents() {
    if (!tocList) return;
 
    tocList.innerHTML = "";
 
    for (const actNumber of ACT_NUMBERS) {
        const actGroup = document.createElement("div");
        actGroup.className = "toc-act-group";
 
        const actTitle = document.createElement("h3");
        actTitle.className = "toc-act-title";
        actTitle.textContent = ACT_DATA[actNumber]?.title || `Act ${actNumber}`;
        actGroup.appendChild(actTitle);
 
        const actSceneCount = ACT_DATA[actNumber].scenes.length;
 
        for (let localScene = 1; localScene <= actSceneCount; localScene++) {
            const globalScene =
                getActStartScene(actNumber) + localScene - 1;
 
            const sceneElement = getSceneElement(globalScene);
            const speakerElement =



                sceneElement?.querySelector(".scene-dialogue-nameplate");
 
            const speakerName =
                speakerElement?.textContent.trim() || "Speaker";
 
            const item = document.createElement("div");
            item.className = "toc-scene-item";
            item.setAttribute("role", "button");
            item.setAttribute("tabindex", "0");
 
            item.innerHTML = `
                <span>
                    Scene ${localScene}: ${escapeHTML(speakerName)}
                </span>
            `;
 
            const chooseScene = async () => {
                if (isTransitioning) return;
 
                if (tocModal?.open) {
                    tocModal.close();
                }
 
                await goToScene(globalScene);
            };
 
            item.addEventListener("click", chooseScene);
 
            item.addEventListener("keydown", event => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    chooseScene();
                }
            });
 
            actGroup.appendChild(item);
        }
 
        tocList.appendChild(actGroup);
    }
}
 
    /* HTML ESCAPING */
    function escapeHTML(value) {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }
 
    /* AUDIO */
    function updateAudioUI() {
        if (audioVisualizer) audioVisualizer.classList.toggle("active", !isMuted);
        if (btnMute) {
            const icon = btnMute.querySelector("i");
            if (icon) icon.className = isMuted ? "bi bi-volume-mute-fill" : "bi bi-volume-up-fill";
        }
        if (btnAudioToggle) {
            const icon = btnAudioToggle.querySelector("i");
            if (icon) icon.className = isMuted ? "bi bi-play-fill" : "bi bi-pause-fill";
        }
    }
    function toggleAmbientSound() {
        const AudioConstructor = window.AudioContext || window.webkitAudioContext;
        if (!AudioConstructor) {
            console.warn("Web Audio API is not available.");
            return;
        }
        if (!audioContext) {
            try {
                audioContext = new AudioConstructor();
                const oscillator = audioContext.createOscillator();
                const gain = audioContext.createGain();
                oscillator.type = "sine";
                oscillator.frequency.setValueAtTime(110, audioContext.currentTime);
                gain.gain.setValueAtTime(0.02, audioContext.currentTime);
                oscillator.connect(gain);
                gain.connect(audioContext.destination);
                oscillator.start();
                isMuted = false;
                updateAudioUI();
            } catch (error) {
                console.error("Could not initialize ambient sound:", error);
            }
            return;
        }
        if (audioContext.state === "suspended") {



            audioContext.resume();
            isMuted = false;
            updateAudioUI();
            return;
        }
        if (audioContext.state === "running") {
            audioContext.suspend();
            isMuted = true;
            updateAudioUI();
        }
    }
 
    function playSceneAudio(audioPath) {
    // Stop the previous scene's audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    // If this scene has no audio, stop here
    if (!audioPath || isMuted) {
        return;
    }

    // Create the new audio
    currentAudio = new Audio(audioPath);

    // Set volume
    currentAudio.volume = 1.0;

    // Play
    currentAudio.play().catch(error => {
        console.warn("Scene audio could not play:", error);
    });
}
    
    /* FULLSCREEN */
    async function toggleFullscreen() {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (error) {
            console.warn("Fullscreen request failed:", error);
        }
    }
 
    /* EVENT HANDLERS */
    function bindEvents() {
        navNext?.addEventListener("click", event => {
            event.stopPropagation();
            nextScene();
        });
        navPrev?.addEventListener("click", event => {
            event.stopPropagation();
            previousSceneAction();
        });
        if (frontCover) {
            frontCover.addEventListener("click", event => {
                event.stopPropagation();
                if (currentScene === 0 && !isTransitioning) nextScene();
            });
        }
        document.addEventListener("keydown", event => {
            const target = event.target;
            const isInput = target instanceof HTMLElement && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable);
            if (isInput) return;
            if (event.key === "ArrowRight" || event.key === " ") {
                event.preventDefault();
                nextScene();
            } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                previousSceneAction();
            } else if (event.key === "Escape" && tocModal?.open) {
                tocModal.close();
            }
        });
        btnToc?.addEventListener("click", event => {
            event.stopPropagation();
            if (typeof tocModal?.showModal === "function") tocModal.showModal();
        });
        tocModal?.querySelector(".btn-close-modal")?.addEventListener("click", () => tocModal.close());
        btnAudioToggle?.addEventListener("click", event => {
            event.stopPropagation();
            toggleAmbientSound();
        });
        btnMute?.addEventListener("click", event => {
            event.stopPropagation();
            toggleAmbientSound();
        });
        btnFullscreen?.addEventListener("click", event => {
            event.stopPropagation();
            toggleFullscreen();
        });
    }
 
    /* INITIALIZATION */
    function initializeBook() {
        if (!cameraViewport || !flipBook || !actTemplate) {
            console.error("Chronicles of Antiquity could not initialize.");
            return;
        }
        generateActPages();
        resetAllPageStates();
        settlePagesForAct(1);
        resetAllSceneStates();
        currentScene = 0;
        previousScene = 0;
        zoomOut();
        if (frontCover) {



            frontCover.style.transform = "rotateY(0deg)";
            frontCover.style.zIndex = "900";
        }
        if (backCover) {
            backCover.style.zIndex = "0";
            backCover.style.transform = "rotateY(0deg)";
        }
        if (legacyDialogueHud) {
            legacyDialogueHud.classList.add("hidden");
            legacyDialogueHud.setAttribute("aria-hidden", "true");
        }
        buildTableOfContents();
        bindEvents();
        updateUI();
        updateAudioUI();
        if (preloader) {
            window.setTimeout(() => preloader.classList.add("hidden"), 800);
        }
        console.info(
    "Chronicles of Antiquity initialized successfully.",
    `${CONFIG.totalActs} Acts × ${CONFIG.totalScenes} Scenes`
);
    }
 
    initializeBook();
});