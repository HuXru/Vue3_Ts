export interface ColumnProps {
    id: number;
    title: string;
    avater?: string;
    description: string;
}
export interface PostProps {
    id: number;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    columnId: number
}

export const testData: ColumnProps[] = [
    {
        id: 1,
        title: 'test1的专栏',
        avater: 'https://s1.chu0.com/src/img/png/fa/fa26f3c48f5a47879ebedef3774f02b1.png?imageView2/2/w/190&e=1659333600&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:i5j4nccoaFlAvH33m9WxjGpPAMg=',
        description: '嘻嘻嘻嘻嘻'
    },
    {
        id: 2,
        title: 'test2的专栏',
        avater: 'https://s1.chu0.com/src/img/png/fa/fa26f3c48f5a47879ebedef3774f02b1.png?imageView2/2/w/190&e=1659333600&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:i5j4nccoaFlAvH33m9WxjGpPAMg=',
        description: '哈哈哈哈哈哈'
    }
]
export const testPosts: PostProps[] = [
    {
        id: 1,
        title: '这是我的第一篇文章',
        content: 'this is a new post you',
        image: 'https://s1.chu0.com/src/img/png/fa/fa26f3c48f5a47879ebedef3774f02b1.png?imageView2/2/w/190&e=1659333600&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:i5j4nccoaFlAvH33m9WxjGpPAMg=',
        createdAt: '2022-08-10 09:14:22',
        columnId: 1
    }
]
