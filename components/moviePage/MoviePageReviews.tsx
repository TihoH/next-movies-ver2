const reviews = [
  {
    id: 1,
    name: "КиноМан",
    date: "Сегодня, 12:45",
    rating: 8,
    text: "Атмосферный фильм с хорошим напряжением. Не всё идеально, но смотреть было интересно до финала.",
    likes: 24,
  },
  {
    id: 2,
    name: "Мария К.",
    date: "Вчера, 18:21",
    rating: 9,
    text: "Очень понравилась визуальная часть и музыка. История держит внимание, актёры сыграли убедительно.",
    likes: 17,
  },
  {
    id: 3,
    name: "DarkWatcher",
    date: "3 дня назад",
    rating: 7,
    text: "Сюжет местами предсказуемый, но картинка, монтаж и атмосфера вытягивают фильм.",
    likes: 15,
  },
  {
    id: 4,
    name: "Алексей",
    date: "Неделю назад",
    rating: 8,
    text: "Хороший вариант на вечер. Есть сильные сцены, особенно ближе к середине фильма.",
    likes: 11,
  },
  {
    id: 5,
    name: "Анна",
    date: "2 недели назад",
    rating: 6,
    text: "Фильм неплохой, но ожидала больше. Финал нормальный, но хотелось сильнее.",
    likes: 8,
  },
];

export default function MoviePageReviews({ nameFilm }: { nameFilm: string }) {
  return (
    <section className="mt-12 rounded-3xl border border-white/10 bg-[#070A0E] p-6 shadow-2xl">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <span className="text-sm uppercase tracking-[0.25em] text-baseYellow">
            Reviews
          </span>
          <h3 className="mt-2 text-4xl font-bold text-white">
            Отзывы о фильме <span className="text-baseYellow">«{nameFilm}»</span>
          </h3>
          <p className="mt-2 text-gray-400">
            Оценки зрителей, впечатления и короткие мнения после просмотра
          </p>
        </div>

        <button className="rounded-full border border-baseYellow/30 px-5 py-2 text-baseYellow transition hover:bg-baseYellow hover:text-black">
          Читать все
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-3xl border border-baseYellow/20 bg-gradient-to-br from-baseYellow/15 to-white/[0.03] p-6">
          <p className="text-gray-400">Средняя оценка</p>
          <div className="mt-3 text-7xl font-bold text-baseYellow">7.8</div>
          <div className="mt-3 text-2xl text-baseYellow">★★★★☆</div>
          <p className="mt-3 text-gray-400">На основе 128 отзывов</p>

          <div className="mt-6 space-y-3">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <div key={star} className="flex items-center gap-3 text-sm">
                <span className="w-8 text-gray-300">{star}★</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-baseYellow"
                    style={{ width: `${[68, 19, 8, 3, 2][index]}%` }}
                  />
                </div>
                <span className="w-10 text-right text-gray-400">
                  {[68, 19, 8, 3, 2][index]}%
                </span>
              </div>
            ))}
          </div>
        </aside>

        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-baseYellow/40 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-baseYellow/15 text-lg font-bold text-baseYellow">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                <span className="rounded-full bg-black/40 px-3 py-1 text-baseYellow">
                  ★ {review.rating}/10
                </span>
              </div>

              <p className="leading-7 text-gray-300">{review.text}</p>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-gray-500">
                <span>👍 {review.likes}</span>
                <button className="text-baseYellow opacity-80 transition group-hover:opacity-100">
                  Ответить
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}