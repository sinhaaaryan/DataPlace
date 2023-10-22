import sys
sys.path.append('/Users/akhil/Downloads/Hack-Harvard/ai')
import os 
import json 
import cornac 
import papermill as pm
import pandas as pd 
import scrapbook as sb 
from sklearn.model_selection import train_test_split
from recommenders.datasets import terra
from recommenders.utils.timer import Timer 
from recommenders.utils.constants import SEED
from recommenders.cornac.cornac_utils import predict_ranking
from recommenders.evaluation.python_evaluation import map_at_k, ndcg_at_k, precision_at_k, recall_at_k
import pickle 

x = '100k'

TOP_K = 10

NUM_FACTORS = 200
NUM_EPOCHS = 100

data = terra.load_pandas_df(
    size=x,
    header=["userID", "itemID", "rating"]
)

data.head()
train, test = train_test_split(data, test_size=0.25, random_state=42)

train_set = cornac.data.Dataset.from_uir(train.itertuples(index=False), seed=SEED)

bpr = cornac.models.BPR(
    k=NUM_FACTORS,
    max_iter=NUM_EPOCHS,
    learning_rate=0.01,
    lambda_reg=0.001,
    verbose=True,
    seed=SEED
)
with Timer() as t:
    bpr.fit(train_set)

print("Took {} seconds for training.".format(t))
if int(t.interval) < 2.5: 
    print("Your data looks like a perfect match for an active buyer request! Let's send it!")
else:
    print("It doesn't look like your data is a good fit for active requests, we'll update you when you can send it!")
