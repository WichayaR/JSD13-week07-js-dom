const progressX = document.getElementById('progressX');
const btnPokemon = document.getElementById('btn-pokemon');
const counterDisplay = document.getElementById('counter-display');

let clickCount = 0;

btnPokemon.addEventListener('click', async () => {
    clickCount++;
    counterDisplay.textContent = `Total Clicks: ${clickCount}`;

    //สุ่มตัวเลขตั้งแต่ 1 - 151
    const randomID = Math.floor(Math.random() * 151) + 1;

    try {
        //ดึงข้อมูลจาก API ตามเลข ID ที่สุ่มได้
        const findPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`);
        if (!findPokemon.ok) throw new Error('Network response was not ok');

        const data = await findPokemon.json();

        //สร้าง Element HTML ขึ้นมาใหม่เป็นกล่องเก็บ
        const cardDiv = document.createElement('div');
        const img = document.createElement('img');
        const nameP = document.createElement('p');

        cardDiv.classList.add('pokemon-card'); //เพิ่มคลาส CSS ให้การ์ด
        img.src = data.sprites.front_default; //ดึงลิงค์รูปภาพโปเกมอน
        nameP.textContent = data.name; //ดึงชื่อโปเกม่อน

        //นำรูปภาพและชื่อเข้าใส่ไปในกล่อง div 
        cardDiv.append(img);
        cardDiv.append(nameP);

        cardDiv.addEventListener('click', () => {
            cardDiv.remove();
        });

        //นำการ์ดทั้งไปแสดงในกล่องที่ชื่อ progressX
        progressX.append(cardDiv);
    } catch (error) {
        console.error('Failed to fetch pokemon:', error);
    }
});