import { Card, CardHeader, CardTitle, CardContent } from '@/admin/components/ui/card'
import { Button } from '@/admin/components/ui/button'

const NewsListItem = ({ item, onEdit, onDelete }) => {
  return (
    <Card className="border shadow-sm">
      <img
        src={'http://localhost:3000' + item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />

      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="line-clamp-3 text-sm text-muted-foreground">{item.content}</p>

        <div className="flex flex-col gap-2">
          <Button
            onClick={() => onEdit(item)}
            variant="secondary"
            className="w-full border border-neutral-800"
          >
            Düzenle
          </Button>
          <Button
            onClick={() => onDelete(item._id)}
            variant="destructive"
            className="w-full"
          >
            Sil
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default NewsListItem
