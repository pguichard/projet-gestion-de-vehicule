import React from 'react';
import {Button, Form, Input, InputNumber} from 'antd';
import axios from "axios";

const layout = {
    labelCol: {
        span: 8,
    }, wrapperCol: {
        span: 16,
    },
};
const onFinish = (id) => (values) => {
    axios.put(`http://localhost:8080/api/vehicles/${id}`, values).catch(error => {
        console.error("Il y a une erreur avec la récupération des véhicules", error);
    });
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
const FormVehicle = ({vehicle}) => (
    <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish(vehicle?.id)}
        style={{
            maxWidth: 600,
        }}
        initialValues={vehicle}
        validateMessages={validateMessages}
    >
        <Form.Item
            name='make'
            label="marque"
            rules={[{
                required: true,
                type: 'string',
            },]}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            name="model"
            label="modele"
            rules={[{
                required: true,
                type: 'string',
            },]}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            name="year"
            label="Année"
            rules={[{
                required: true,
                type: 'number', max: new Date().getFullYear(),
            },]}
        >
            <InputNumber/>
        </Form.Item>
        <Form.Item
            name="license"
            label="Immatriculation"
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
