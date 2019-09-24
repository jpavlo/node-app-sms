import { Request, Response, NextFunction } from 'express';
import * as jwt from "jsonwebtoken";

export async function getToken(req: Request, res: Response, next : NextFunction) {

    const {name} = req.body;

    const expiresIn = 60 * 60;
    const token = jwt.sign({name}, process.env.APPLICATION_SECRET || 'fs9DEsWXKvCtmvnFxdxPj1S3iQe', { expiresIn });

    res.json({
        expiresIn,
        token
    });
}



