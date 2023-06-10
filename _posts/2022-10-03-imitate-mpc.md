---
layout: distill
title: Imitating Model-based Control Using Deep RL
description: Master Thesis, D-MAVT, ETH Zürich
giscus_comments: false
tags: robotics
date: 2022-10-03

authors:
  - name: Jin Cheng
    url: "https://jin-cheng.me/"
    affiliations:
      name: D-MAVT<d-footnote>Department of Mechanical and Process Engineering</d-footnote>, ETH Zürich

#bibliography: 2022-10-28-haptic-teleop.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
#toc:
#  - name: Equations
#    # if a section has subsections, you can add them as follows:
#    # subsections:
#    #   - name: Example Child Subsection 1
#    #   - name: Example Child Subsection 2
#  - name: Citations
#  - name: Footnotes
#  - name: Code Blocks
#  - name: Interactive Plots
#  - name: Layouts
#  - name: Other Typography?

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
#_styles: >
#  .fake-img {
#    background: #bbb;
#    border: 1px solid rgba(0, 0, 0, 0.1);
#    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
#    margin-bottom: 12px;
#  }
#  .fake-img p {
#    font-family: monospace;
#    color: white;
#    text-align: left;
#    margin: 12px 0;
#    text-align: center;
#    font-size: 16px;
#  }

---
<img src="../../../assets/img/imitate-mpc/imitate-mpc.png"  width="700">

## Abstract

The main goal of this work is to train a **perceptive locomotion policy** for quadruped robots that can travel on the structured terrain with more precise foot placements, especially on gaps and stepping stones. 
This task is challenging for learning-based methods because the reward for precise footholds is sparse and not differentiable. 
Besides, the learned policy can easily adopt the motion to recover when it steps down in the gaps instead of setting feet precisely. 
In this work, we leverage the idea of **imitation learning** and use the **perceptive model predictive controller** (MPC) as the expert. 
Using the dataset collected from MPC in simulation offline, we utilize the framework of **adversarial motion priors** (AMP) and train a discriminator to distinguish the motion from the policy and the expert. 
The output of the discriminator will serve as the scalar reward to help train the policy. 
Unlike the original AMP, we add the perceptive measurement in the discriminator observation and make the style reward also an indicator of the similarity of the terrain, which can help the policy to prefer similar terrains to the expert when navigating on the structured terrains. 
To reduce the constraint on the robot motion and make full use of the expert motion to guide the policy behavior of crossing the gaps or stepping on the stones, we formulate the task of the policy as an end-to-end local navigation and locomotion problem. 
Given the position and heading target, the learned policy can travel on the gaps and stones of the same size as the expert data with a high success rate in simulated environments. 
Our proposed method works well in training such a terrain-adaptive locomotion policy and reducing the tuning effort despite of the effort to collect and tune the dataset.

## Supplementary Video
Gap crossing
<div class="embed-container"> 
<iframe width="700" height="400" src="https://www.youtube.com/embed/VOR-12Tb0ZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Stepping stones
<div class="embed-container">
<iframe width="700" height="400" src="https://www.youtube.com/embed/SmNAqm1FcPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


