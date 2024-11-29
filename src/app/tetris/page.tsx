import React, { useState, useEffect, useCallback } from 'react';
import './Tetris.css';

const Tetris: React.FC = () => {
    const [board, setBoard] = useState<number[][]>(createEmptyBoard());
    const [currentPiece, setCurrentPiece] = useState<number[][]>(generateRandomPiece());
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            movePieceDown();
        }, 1000);
        return () => clearInterval(interval);
    }, [position]);

    const createEmptyBoard = (): number[][] => {
        return Array.from({ length: 20 }, () => Array(10).fill(0));
    };

    const generateRandomPiece = (): number[][] => {
        const pieces = [
            [[1, 1, 1, 1]],
            [[1, 1], [1, 1]],
            [[0, 1, 0], [1, 1, 1]],
            [[1, 1, 0], [0, 1, 1]],
            [[0, 1, 1], [1, 1, 0]],
        ];
        return pieces[Math.floor(Math.random() * pieces.length)];
    };

    const movePieceDown = () => {
        setPosition((prev) => ({ x: prev.x, y: prev.y + 1 }));
    };

    const renderBoard = () => {
        const newBoard = board.map(row => [...row]);
        currentPiece.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value) {
                    newBoard[position.y + y][position.x + x] = value;
                }
            });
        });
        return newBoard.map((row, y) => (
            <div key={y} className="row">
                {row.map((cell, x) => (
                    <div key={x} className={`cell ${cell ? 'filled' : ''}`}></div>
                ))}
            </div>
        ));
    };

    return (
        <div className="tetris">
            {renderBoard()}
        </div>
    );
};

export default Tetris;