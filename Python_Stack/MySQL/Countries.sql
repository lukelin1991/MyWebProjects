/* 1. All the countries that speak Slovene
=name of the country, language and language percentage.
 Your query should arrange the result by language percentage in descending order. (1) */

 SELECT countries.name, languages.language, languages.percentage
 FROM countries
 JOIN languages ON countries.id = languages.country_id
 WHERE languages.language = 'Slovene'
 ORDER BY languages.percentage DESC;


/* 2. Total number of cities for each country
name of the country and the total number of cities.
number of cities in descending order.
*/

SELECT countries.name, COUNT(cities.name) as the_cities
FROM countries
JOIN cities
ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY the_cities DESC;


/* 3. all the cities in Mexico with a population of greater than 500,000
result by population in descending order
*/

SELECT cities.name, cities.population
FROM cities
JOIN countries ON cities.country_id = countries.id
WHERE countries.name = 'Mexico' and cities.population > 500000
ORDER BY population DESC;

/* 4. all languages in each country with a percentage greater than 89%
result by percentage in descending order
*/

SELECT countries.name, languages.language, languages.percentage
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;


/* 5. all the countries with Surface Area below 501 and Population greater than 100,000 */

SELECT countries.name, countries.surface_area, countries.population
FROM countries
WHERE countries.surface_area < 501 and countries.population > 100000;


/* 6. countries with only Constitutional Monarchy , capital > 200 , life expectancy > 75 yrs
*/
SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy
FROM countries
WHERE countries.government_form = 'Constitutional Monarchy' and countries.capital > 200 and countries.life_expectancy > 75;



/* 7. all the cities of Argentina inside the Buenos Aires district, population >500, 000
return the Country Name, City Name, District and Population.
*/

SELECT countries.name, cities.name, cities.district, cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE cities.district = 'Buenos Aires' and cities.population > 500000;
/*should i also ask for the ocuntry? in the where clause?*/



/* 8. summarize the number of countries in each region
display region and the number of countries
arrange by the number of countries in descending order
*/

SELECT countries.region,COUNT(countries.region) as num_countries
FROM countries
GROUP BY countries.region
ORDER BY num_countries DESC;