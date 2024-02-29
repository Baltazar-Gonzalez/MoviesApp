import { Button, Form, Input, Row, Col } from 'antd'
const { Item } = Form

export function LoginForm() {
  return (
    <Row>
      <Col xs={1} sm={2} md={6} lg={7}></Col>
      <Col xs={22} sm={20} md={12} lg={10}>
        <Form>
          <Item label="Email">
            <Input placeholder="input placeholder" />
          </Item>
          <Item label="Constraseña">
            <Input placeholder="input placeholder" />
          </Item>
          <Item>
            <Button type="primary">Enviar</Button>
          </Item>
        </Form>
      </Col>
      <Col xs={1} sm={2} md={6} lg={7}></Col>
    </Row>
  )
}
