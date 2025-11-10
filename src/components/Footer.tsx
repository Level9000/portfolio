import { Container } from '@/components/Container'

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>
            <Container>
                <div className="py-6 flex justify-center">
                    <p className="text-xs sm:text-sm text-gray-500 text-center">
                        Small Machines AI LLC. &copy; {year} All rights
                        reserved.
                    </p>
                </div>
            </Container>
        </footer>
    )
}
