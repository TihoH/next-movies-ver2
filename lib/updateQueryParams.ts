

 export function updateQuery(
  path: string, // путь страницы  , после локах хост и до знака ? то есть маршрут
  urlParams: any, // мы передаем текущие параметры
  updates: Record<string, string>  // то , что нужно обновить
) {
  const params = new URLSearchParams(urlParams.toString()); // слепить новыее параметры
//   Что такое URLSearchParams

// Это встроенный объект JavaScript для работы с query-параметрами URL.

// Он умеет:

// получать параметры

// добавлять параметры

// изменять параметры

// удалять параметры

// превращать всё обратно в строку URL

  Object.entries(updates).forEach(([key, value]) => { // сверху мы создали новые параметры и тут мы в них дальше сохраняем обновленные свойства
    params.set(key, value);
  });

  return `${path}?${params.toString()}`;// тут мы собираем всю строку из путей что передали (еппрвым параметром) и + новые значения параметров из (params)
}