const capitals = {
    日本: "東京",
    アメリカ: "ワシントン",
    イギリス: "ロンドン",
};

for(let entry of Object.entries(capitals)) {
    const [country, city] = entry;
    console.log(`${country}の首都は${city}です。`);
}