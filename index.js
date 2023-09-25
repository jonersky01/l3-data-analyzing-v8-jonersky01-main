export default (content) => {
    const contentArr = content.trim()
        .split('\n')
        .slice(1)
        .map((i) => i.split(','));

    //first
    console.log(`Count: ${contentArr.length}`);
    
    //second
    const name = contentArr.map((n) => n[0])
        .sort((a, b) => a.localeCompare(b));
    console.log(`Barbershops: ${name.join(', ')}`);

    //third 
    const ratings = contentArr.map((i) => Number(i[i.length - 1]));
    const minMax = { min: ratings[1], max: ratings[0] };
    ratings.map((i) => {
        if (i > minMax.max) {
            minMax.max = i;
            return;
        } else if (i < minMax.min) {
            minMax.min = i;
            return;
        }
    })
    const {min, max} = minMax;
    console.log(`Ratings: Min: ${min} Max: ${max}`);
    
    //fourth
    const oldestBarbershop = {name: '', old: 0};
    contentArr.map((i) => {
        const yo = Number(i[i.length - 2]);
        if (yo > oldestBarbershop.old) {
            oldestBarbershop.name = i[0];
            oldestBarbershop.old = yo;
        }
    });
    console.log(`Oldest barbershop: ${oldestBarbershop.name}`);

    
};
