import { Card, CardHeader, CardTitle, CardContent } from '@/admin/components/ui/card'
import { Button } from '@/admin/components/ui/button'

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Selam',
      img: 'https://via.placeholder.com/600x400',
      author:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed pariatur et inventore sint alias excepturi.',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item) => (
        <Card
          key={item.id}
          className="overflow-hidden border shadow-sm hover:shadow-md transition"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-48 object-cover"
          />

          <CardHeader>
            <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground line-clamp-3">{item.author}</p>

            <Button
              className="w-full"
              variant="secondary"
            >
              Haberin Devamı
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default News
