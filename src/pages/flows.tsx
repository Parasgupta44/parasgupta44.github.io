import React from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'

const Flows = () => {
  const isBrowser = typeof window !== 'undefined'
  var points = []
  var mult
  var r1, r2, g1, g2, b1, b2

  const setup = (p5, parentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(parentRef)
    p5.background(30)
    p5.angleMode(p5.DEGREES)
    p5.noiseDetail(1)

    var density = 70
    var space = p5.width / density

    for (var x = 0; x < p5.width; x += space) {
      for (var y = 0; y < p5.height; y += space) {
        var p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-10, 10))
        points.push(p)
      }
    }
    p5.shuffle(points, true)
    r1 = p5.random(255)
    r2 = p5.random(255)
    g1 = p5.random(255)
    g2 = p5.random(255)
    b1 = p5.random(255)
    b2 = p5.random(255)

    mult = p5.random(0.002, 0.04)
  }

  const draw = p5 => {
    p5.noStroke()
    if (p5.frameCount * 5 <= points.length) {
      var max: number = p5.frameCount * 5
    } else {
      var max: number = points.length
    }

    for (var i = 0; i < max; ++i) {
      var r = p5.map(points[i].x, 0, p5.width, r1, r2)
      var g = p5.map(points[i].y, 0, p5.height, g1, g2)
      var b = p5.map(points[i].x, 0, p5.width, b1, b2)
      var alpha = p5.map(
        p5.dist(p5.width / 2, p5.height / 2, points[i].x, points[i].y),
        0,
        350,
        400,
        0
      )

      p5.fill(r, g, b, alpha)

      var angle = p5.map(
        p5.noise(points[i].x * mult, points[i].y * mult),
        0,
        1,
        0,
        720
      )
      points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)))
      if (
        p5.dist(p5.width / 2, p5.height / 2, points[i].x, points[i].y) < 350
      ) {
        p5.ellipse(points[i].x, points[i].y, 1)
      }
    }
  }

  const doubleClicked = p5 => {
    if (isBrowser) {
      window.alert('Well looks like you like this pattern!')
    }
    p5.saveCanvas('flow', 'png')
  }

  const windowResized = p5 => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
  }

  return (
    <div className="App">
      {/* <h1>react-p5</h1> */}
      {isBrowser && (
        <Sketch setup={setup} draw={draw} doubleClicked={doubleClicked} />
      )}
    </div>
  )
}

export default Flows
