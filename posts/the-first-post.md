---
title: A first post, for the blog
description: A blog should not be empty.
slug: the-first-post
date: January 3, 2023
og: true
---

A blog should not be empty. Here's the first of many posts, mainly to test out the theme<a href="#footnote"><sup>1</sup></a>. Here's some code:

```rust
use tokio::sync::mpsc;

pub enum PipeError {
    /// Upstream have all closed
    InboundGone,
    /// Downstream have all closed
    OutboundGone,
}

/// A pipe that enforces process-once semantics.
///
/// This type ensures that the pipe's owner tasks sees a piece of data
/// once, and that errors or panics in an owning task do not cause data loss
/// from the pipe.
///
/// Using a pipe has a number of advantages
/// - Data is not lost if errors occur during processing
/// - Data is not process twice if errors occur during processing
/// - Flow control via backpressure is preserved
#[derive(Debug)]
pub struct Pipe<T>
where
    T: std::fmt::Debug + Send + Sync + 'static,
{
    rx: mpsc::Receiver<T>,
    tx: mpsc::Sender<T>,
    contents: Option<T>,
}
```

### Subtitles

Here's a subheading.

<div id="footnote"></div>

1. Cool footnote.
