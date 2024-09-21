import { Badge, Button, Card, Group, Image, Text } from "@mantine/core"

const Product = () => {
    return (
        <Card shadow="sm" padding="5px" radius="sm" withBorder>
            <Card.Section>
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={100}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="sm" mb="sm">
                <Text fw={500} style={{ fontSize: '14px', lineHeight: '14px' }}>Samsung A25 128gb asda sda sd asd </Text>
                {/* <Badge color="pink">Chegirma!!!</Badge> */}
            </Group>

            <Text size="sm" c="dimmed">
                23.000 so'm
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
                Savatchaga
                <Badge ml='2px'>
2
                </Badge>
            </Button>
        </Card>
    )
}

export default Product