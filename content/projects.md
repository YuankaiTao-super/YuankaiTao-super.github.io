---
title: "Technical Projects"
permalink: /projects/
---

## Performance Optimization of a Yield-to-Worst Solver
**Florida Municipal Securities** · [Repo](https://github.com/YuankaiTao-super/Capstone_FMS_2025)  
- Assisted in completing the core functions related to risk detection for the computation module.
- Set up and managed a Continuous Integration (CI) pipeline to run several tests on main computation module for every code change on GitHub Actions, to ensure the results of computations are correct.
- Designed a caching system to memorize high-frequency cash flow queries, solving the I/O bottleneck from redundant computations, reducing it from 1.17 ms to 0.13 ms, yielding a 9x performance increase.
- Rewrote the core yield-to-worst numerical solver using Numba JIT, reducing the computation time for a single bond from 1.57 ms to 7.5 μs, achieving a 210x speedup.

## Jane Street Market Prediction Competition (Kaggle) — Silver Medal
[Repo](https://github.com/YuankaiTao-super/Kaggle2024-Jane-Street-Real-Time-Market-Data-Forecasting) · Ranking: 94/3757 (Top 2.7%)  
- Conducted EDA (e.g., correlation analysis, visualization) on dataset to better understand hidden patterns.
- Implemented feature expansion on anonymized market data to obtain more information for training.
- Trained multiple models and ensembled (NN, Ridge Regression, XGBoost, TabNet), achieving private=0.76 / public=0.78 while mitigating overfitting.

## UCSD CSE 251B Final Project — Trajectory Prediction
[Repo](https://github.com/YuankaiTao-super/CSE-251B-Final-Project)  
- Performed data preprocessing and augmentation (rotation, flipping, Gaussian noise).
- Architected a OneStepLSTM autoregressive model, improving test metric from 10.22 to 8.50.

## Text Analysis and BERT Fine-tuning on 10k reports
[Repo](https://github.com/YuankaiTao-super/Text-Analysis-and-Bert-Fine-tuning-on-10k-files)  
- Extracted and cleaned textual data from 10-K reports for Fluence Energy and performed exploratory analysis.
- Fine-tuned a BERT model on the cleaned dataset (20.5 million rows of text) downloaded from Hugging Face.
