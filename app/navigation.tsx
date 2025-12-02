import Link from 'next/link'

const navigationList = [
    { id: 1, link: '/dashboard/ssr', name: 'ssr' },
    { id: 2, link: '/dashboard/ssg', name: 'ssg' },
    { id: 3, link: '/dashboard/isr', name: 'isr' },
    { id: 4, link: '/dashboard/isr-tag', name: 'isr-tag' },
    { id: 5, link: '/dashboard/rsc', name: 'rsc' },
    { id: 6, link: '/dashboard/rsc-client', name: 'rsc-client' },
]

export default function Navigation() {
    return (
        <nav style={{ marginTop: '4px', marginLeft: '4px' }}>
            {navigationList.map((navi) => {
                return (
                    <Link
                        key={navi.id}
                        href={navi.link}
                        style={{
                            marginLeft: '4px',
                            border: '1px solid grey',
                            minWidth: '200px',
                            padding: '4px',
                            width: '200px',
                            borderRadius: '4px',
                        }}
                    >
                        {navi.name}
                    </Link>
                )
            })}
        </nav>
    )
}
