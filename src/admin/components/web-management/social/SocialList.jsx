import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/admin/components/ui/table'
import { Button } from '@/admin/components/ui/button'
import { Pencil, Trash2, Globe, HelpCircle } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export function SocialList({ data, onEdit, onDelete }) {
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName]
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-gray-700" />
    }
    return <HelpCircle className="w-5 h-5 text-muted-foreground" />
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>İkon</TableHead>
            <TableHead>Platform Adı</TableHead>
            <TableHead>Bağlantı</TableHead>
            <TableHead className="text-right">İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.length > 0 ? (
            data.map((item) => (
              <TableRow key={item._id}>
                <TableCell>
                  <div className="p-2 bg-muted/50 rounded-md flex items-center justify-center w-10 h-10 border">
                    {renderIcon(item.socialIcon)}
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>{item.socialName}</span>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {item.socialIcon}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <a
                    href={item.socialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
                  >
                    <Globe className="w-3 h-3" /> Linke Git
                  </a>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onEdit(item)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => onDelete(item._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-10 text-muted-foreground"
              >
                Henüz eklenmiş bir sosyal medya hesabı yok.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
