import React from 'react';
import {Button, Form, Input, InputNumber} from 'antd';

const layout = {
    labelCol: {
        span: 8,
    }, wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
    pattern: {
        mismatch: '${label} must be a valid license (xxxx xx xx , xx-xxx-xx)!',
    }
};
const onFinish = (values) => {
    console.log(values);
};
const FormVehicle = ({vehicle}) => (<Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
        maxWidth: 600,
    }}
    validateMessages={validateMessages}
>
    <Form.Item
        name={['vehicles', 'make']}
        label="marque"
        initialValue={vehicle?.make}
        rules={[{
            required: true,
            type: 'string',
        },]}
    >
        <Input/>
    </Form.Item>
    <Form.Item
        name={['vehicles', 'model']}
        label="modele"
        initialValue={vehicle?.model}
        rules={[{
            required: true,
            type: 'string',
        },]}
    >
        <Input/>
    </Form.Item>
    <Form.Item
        name={['vehicles', 'year']}
        label="Année"
        initialValue={vehicle?.year}
        rules={[{
            required: true,
            type: 'number', max: new Date().getFullYear(),
        },]}
    >
        <InputNumber/>
    </Form.Item>
    <Form.Item
        name={['vehicles', 'license']}
        label="Immatriculation"
        initialValue={vehicle?.license}
        rules={[{
            pattern: new RegExp('\\d{1,4}\\s[A-Z]{1,3}\\s\\d{2}|[A-Z]{1,2}-\\d{3}-[A-Z]{1,2}'),
            required: true,
            type: 'string',
        },]}
    >
        <Input/>
    </Form.Item>
    <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
    </Form.Item>
</Form>);
export default FormVehicle;
