function city_country(city_country: string): string{
    let a:string[] = city_country.split('_')
    return `"${a[0]}, ${a[1]}"`
}
console.log(city_country("Mecca_SaudiArabia"));
console.log(city_country("Madina_SaudiArabia"));
console.log(city_country("Hyderabad_Pakistan"));